import Image from "next/image";
import Link from "next/link";

export const heading1 = (
  <>
    <h1 className="font-heading mb-6">Explore Our Exquisite Houses</h1>
    <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
      Experience an Exquisite House Immersed in Rich History and Timeless
      Elegance.
    </p>
    <Link href={`/rooms`}>
      <button className="btn-primary">Get Started</button>
    </Link>
  </>
);

export const section2 = (
  <div className="md:grid hidden gap-8 grid-cols-1">
    <div className="rounded-2xl overflow-hidden h-48">
      <Image
        src="/images/pexels-enginakyurt-3688261.jpg"
        alt=""
        width={300}
        height={300}
        className="img scale-animation"
      />
    </div>

    <div className="grid grid-cols-2 gap-8 h-48">
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/images/pexels-donaldtong94-189293.jpg"
          alt=""
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Image
          src="/images/pexels-naimbic-2029722.jpg"
          alt=""
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
    </div>
  </div>
);
