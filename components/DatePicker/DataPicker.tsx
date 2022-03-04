import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme

interface Props {
  setSearchedLocation: React.Dispatch<React.SetStateAction<string>>;
}

const DatePicker = ({ setSearchedLocation }: Props) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date>(new Date());
  const [members, setMembers] = useState<number>(1);
  const handleDateChange = (range: any) => {
    setSelectedStartDate(range.selection.startDate);
    setSelectedEndDate(range.selection.endDate);
  };

  const cancelSearch = () => {
    setSearchedLocation("");
  };

  const selectionRange = {
    startDate: selectedStartDate,
    endDate: selectedEndDate,
    key: "selection",
  };
  return (
    <div className="block w-fit mx-auto py-3 shadow-md mb-2">
      <div className="flex flex-col">
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FD5B61"]}
          onChange={handleDateChange}
          className="bg-black"
        />
        <div className="flex px-5 items-center">
          <p className="flex flex-grow font-bold text-lg">Number of Guests</p>
          <div className="flex space-x-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <input
              type="number"
              value={members}
              onChange={(e) => setMembers(Number(e.target.value))}
              min={1}
              className="w-10 text-[#FD5B61] border-2 border-gray-200 rounded text-center"
            />
          </div>
        </div>
        <div className="flex space-x-2 mt-5 px-5">
          <button
            className="flex flex-grow justify-center font-bold p-2 border-none"
            onClick={cancelSearch}
          >
            Cancel
          </button>
          <button className="flex flex-grow bg-[#FD5B61] text-white justify-center font-bold rounded-lg p-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
