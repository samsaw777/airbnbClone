import React from "react";
import Image from "next/image";
import Image1 from "../../../Images/Image1.webp";
const Banner = () => {
  return (
    <div className="relative h-[200px] sm:h-[600px] lg:h-[700px]">
      <Image
        src={Image1}
        layout="fill"
        // objectFit="cover"
        // objectPosition="center"
        alt="Image1"
      />
    </div>
  );
};

export default Banner;
