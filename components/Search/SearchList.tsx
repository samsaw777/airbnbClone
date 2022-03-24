import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
  location: string;
  lat: number;
  long: number;
  star: string;
  price: string;
  total: string;
  selectedLocation: any;
  index: number;
  setSelectedLocation: React.Dispatch<React.SetStateAction<any>>;
}

const SearchList = ({
  lat,
  long,
  image,
  title,
  description,
  location,
  star,
  price,
  total,
  index,
  setSelectedLocation,
  selectedLocation,
}: Props) => {
  React.useEffect(() => {
    window.scroll({
      top: -100,
      left: 0,
      behavior: "smooth",
    });
  }, [selectedLocation]);
  return (
    <div
      className="bg-white shadow-lg md:shadow-none rounded-lg flex flex-col sm:flex-row p-2 w-full mx-auto cursor-pointer hover:shadow-xl"
      onClick={() => setSelectedLocation({ lat, long, index })}
    >
      <div className="relative flex items-center h-44 w-full sm:w-[250px] sm:h-[210px] cursor-pointer justify-center rounded-lg">
        <Image
          src={image}
          alt="hotel rooom"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-grow flex-col space-y-3 px-5 py-3">
        <div className="flex space-x-2 justify-between">
          <div className="text-md text-gray-500">{location}</div>
          <div className="flex space-x-3 items-center justify-center font-bold">
            <button className="px-5 py-1 rounded-lg bg-red-400 text-white">
              Book Room
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="font-bold text-lg">{title}</div>
        <div className="text-sm text-gray-500 flex flex-grow max-w-md">
          {description}
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2 items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-500 font-medium">{star}</span>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="text-md font-bold text-right">{price}</div>
            <div className="text-sm text-gray-500 text-right">{total} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
