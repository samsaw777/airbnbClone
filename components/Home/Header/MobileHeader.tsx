import { useState, useEffect } from "react";
import DatePicker from "../../DatePicker/DataPicker";
import Image from "next/image";
import { useRouter } from "next/router";
import classnames from "classnames";

interface Props {
  placeHolder?: string;
}

const MobileHeader = ({ placeHolder }: Props) => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [searchedLocation, setSearchedLocation] = useState<string>("");
  const [showDate, setShowDate] = useState<boolean>(false);
  const router = useRouter();
  console.log(router.pathname);
  useEffect(function mount() {
    const changeBackground = () => {
      if (window.scrollY >= 20) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);

    return function unMount() {
      window.removeEventListener("scroll", changeBackground);
    };
  });
  console.log(searchedLocation);
  return (
    <>
      {/* <div className="block sm:hidden"> */}
      <header
        className={classnames(
          navbar || searchedLocation
            ? "bg-white shadow-xl sticky"
            : "bg-[#051529] ",
          "block sm:hidden w-full top-0 z-50 p-5 md:px-20"
        )}
      >
        <div
          className={classnames(
            " flex broder border-2 border-gray-200 p-3 justify-center rounded-full mx-auto w-full md:w-96"
          )}
        >
          <input
            value={searchedLocation}
            onChange={(e) => setSearchedLocation(e.target.value)}
            className={classnames(
              navbar || searchedLocation
                ? "text-black placeholder-black"
                : "text-white placeholder-white font-bold",
              "flex-grow outline-none bg-transparent"
            )}
            placeholder={placeHolder || "Search a place here"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 bg-red-400 text-white p-1 rounded-full"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </header>
      {/* </div> */}
      <div className="block sm:hidden">
        <div
          className={classnames(
            navbar ? "fixed" : "hidden",
            "flex justify-around w-full bottom-0 p-5 z-50 bg-gray-100 shadow-xl"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {searchedLocation && (
        <DatePicker
          setSearchedLocation={setSearchedLocation}
          searchedLocation={searchedLocation}
          setShowDate={setShowDate}
        />
      )}
    </>
  );
};

export default MobileHeader;
