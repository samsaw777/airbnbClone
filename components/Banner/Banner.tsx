import React from "react";
import Image from "next/image";
import Image1 from "../../Images/Image1.webp";
const Banner = () => {
  return (
    <div className="absolute top-0 h-[400px] w-full">
      <Image
        src={Image1}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Image1"
      />
    </div>
  );
};

export default Banner;
