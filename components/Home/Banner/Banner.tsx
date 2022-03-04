import React from "react";
import Image from "next/image";
import Image1 from "../../../Images/Image1.webp";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
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
