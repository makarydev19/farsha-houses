"use client";

import { FC } from "react";

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props;

  return (
    <section className="flex md:px-20 px-10 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {heading1}
        <div className="flex mt-12">
          <div className="flex mr-20 gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Basic Room</p>
            <p className="md:font-bold font-medium text-lg xl:text-5xl">1</p>
          </div>
          <div className="flex mr-20 gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Luxury Room</p>
            <p className="md:font-bold font-medium text-lg xl:text-5xl">1</p>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Suite</p>
            <p className="md:font-bold font-medium text-lg xl:text-5xl">1</p>
          </div>
        </div>
      </div>

      {section2}
    </section>
  );
};

export default ClientComponent;
