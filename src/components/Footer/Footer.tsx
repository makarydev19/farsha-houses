import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-16 md:px-20 px-5">
      <div className="container mx-auto ">
        <Link href="/" className="font-black text-tertiary-dark">
          Farsha
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        <div className="flex flex-wrap gap-16 items-center justify-around mx-5">
          <div className="flex-1">
            <p>Hadaba Street - Sharm-Elshiekh</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">codewithMak</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-000</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">codewithMak</p>
            </div>
          </div>
          <div>
            <Image
              src={`/Farsha_M Logo_page-0001.jpg`}
              alt=""
              width={200}
              height={100}
            />
          </div>
          <div className="flex-1 text-center md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of service</p>
            <p className="pb-4">Customer Assistance</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
