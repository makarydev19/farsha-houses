import Image from "next/image";

const Gallery = () => {
  return (
    <div className="mx-auto container py-14 h-full px-16 max-sm:px-0">
      <div className="flex flex-wrap">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/pexels-donaldtong94-189293.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/pexels-enginakyurt-3688261.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-full p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/pexels-naimbic-2029722.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/pexels-pixabay-279746.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/pexels-donaldtong94-189293.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="w-full p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/pexels-donaldtong94-189293.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
