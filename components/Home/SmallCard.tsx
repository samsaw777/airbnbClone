import React from "react";
import Image from "next/image";
interface Props {
  img: string;
  location: string;
  distance: string;
}

const SmallCard = ({ img, location, distance }: Props) => {
  return (
    <div className="transition transform duration-150 ease-out flex space-x-3 rounded-xl hover:bg-gray-100 hover:scale-105 cursor-pointer hover:shadow-xl">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt="cityimage" />
      </div>
      <div className="flex flex-col space-y-1">
        <div className="font-medium">{location}</div>
        <div className="font-bold">{distance}</div>
      </div>
    </div>
  );
};

export default SmallCard;
