import { NextResponse } from 'next/server';
import { createBooking, updateHotelRoom } from '@/libs/apis';
import client from '@/libs/paypal';
import * as paypal from '@paypal/checkout-server-sdk';

export async function POST(req: Request) {
    const body = await req.json();

    try {
        const event = body.event_type;

        if (event === 'CHECKOUT.ORDER.APPROVED') {
            const orderId = body.resource.id;

            // Capture the order to finalize the payment
            const request = new paypal.orders.OrdersCaptureRequest(orderId);
            request.requestBody({});
            const capture = await client.execute(request);

            const order = capture.result;

            const {
                purchase_units: [
                    {
                        items: [
                            {
                                name: roomName,
                                quantity: numberOfDays,
                            },
                        ],
                    },
                ],
            } = order;

            const {
                metadata: {
                    adults,
                    checkinDate,
                    checkoutDate,
                    children,
                    hotelRoom,
                    numberOfDays: days,
                    user,
                    discount,
                    totalPrice: price,
                },
            } = body.resource;

            // Create a booking in your system
            await createBooking({
                adults: Number(adults),
                checkinDate,
                checkoutDate,
                children: Number(children),
                hotelRoom,
                numberOfDays: Number(days),
                discount: Number(discount),
                totalPrice: Number(price),
                user,
            });

            // Update hotel room availability
            await updateHotelRoom(hotelRoom);

            return NextResponse.json('Booking successful', {
                status: 200,
                statusText: 'Booking Successful',
            });
        } else {
            console.log(`Unhandled event type ${event}`);
        }

        return NextResponse.json('Event Received', {
            status: 200,
            statusText: 'Event Received',
        });
    } catch (error: any) {
        console.error('Webhook error:', error);
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
    }
}
