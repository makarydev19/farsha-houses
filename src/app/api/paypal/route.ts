import { authOption } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getRoom } from '@/libs/apis';
import * as paypal from '@paypal/checkout-server-sdk';



const environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID as string,
    process.env.PAYPAL_CLIENT_SECRET as string
);
const client = new paypal.core.PayPalHttpClient(environment);



type RequestData = {
    checkinDate: string;
    checkoutDate: string;
    adults: number;
    children: number;
    numberOfDays: number;
    hotelRoomSlug: string;
};

export async function POST(req: Request, res: Response) {
    const {
        checkinDate,
        adults,
        checkoutDate,
        children,
        hotelRoomSlug,
        numberOfDays,
    }: RequestData = await req.json();

    if (
        !checkinDate ||
        !checkoutDate ||
        !adults ||
        !hotelRoomSlug ||
        !numberOfDays
    ) {
        return new NextResponse('Please all fields are required', { status: 400 });
    }

    const origin = req.headers.get('origin');

    const session = await getServerSession(authOption);

    if (!session) {
        return new NextResponse('Authentication required', { status: 400 });
    }

    const userId = session.user.id;
    const formattedCheckoutDate = checkoutDate.split('T')[0];
    const formattedCheckinDate = checkinDate.split('T')[0];

    try {
        const room = await getRoom(hotelRoomSlug);
        const discountPrice = room.price - (room.price / 100) * room.discount;
        const totalPrice = discountPrice * numberOfDays;

        // Create a PayPal order
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer('return=representation');
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: totalPrice.toFixed(2),
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: totalPrice.toFixed(2),
                            },
                            shipping: {
                                currency_code: 'USD',
                                value: '0.00',
                            },
                            handling: {
                                currency_code: 'USD',
                                value: '0.00',
                            },
                            tax_total: {
                                currency_code: 'USD',
                                value: '0.00',
                            },
                            shipping_discount: {
                                currency_code: 'USD',
                                value: '0.00',
                            },
                            discount: {
                                currency_code: 'USD',
                                value: '0.00',
                            },
                            insurance: {
                                currency_code: 'USD',
                                value: '0.00',
                            },
                        },
                    },
                    items: [
                        {
                            name: room.name,
                            unit_amount: {
                                currency_code: 'USD',
                                value: discountPrice.toFixed(2),
                            },
                            quantity: numberOfDays.toString(),
                            category: 'DIGITAL_GOODS'
                        },
                    ],
                },
            ],
            application_context: {
                brand_name: 'Your Brand Name',
                landing_page: 'NO_PREFERENCE',
                user_action: 'PAY_NOW',
                return_url: `${origin}/users/${userId}`,
                cancel_url: `${origin}/cancel`,
            },
        });

        const order = await client.execute(request);

        return NextResponse.json(order.result, {
            status: 200,
            statusText: 'Payment session created',
        });
    } catch (error: any) {
        console.log('Payment failed', error);
        return new NextResponse(error, { status: 500 });
    }
}
