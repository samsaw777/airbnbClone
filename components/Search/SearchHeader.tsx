import React from "react";
import { format } from "date-fns";
interface Props {
  location: string | string[] | undefined;
  startDate: any;
  endDate: any;
  members: string | string[] | undefined;
}

const SearchHeader = ({ location, startDate, endDate, members }: Props) => {
  const formatedStartDate = format(new Date(startDate), "dd MMM yyyy");
  const formatedEndDate = format(new Date(endDate), "dd MMM yyyy");
  return (
    <div className="flex flex-col space-y-2 px-5 py-10">
      <div className="text-md flex">
        <span className="bg-[#FD5B61] text-white p-2 rounded-lg">
          {formatedStartDate}
        </span>{" "}
        -{" "}
        <span className="bg-[#FD5B61] text-white p-2 rounded-lg">
          {formatedEndDate}
        </span>{" "}
        - {members} members
      </div>
      <div className="font-bold text-2xl">You have searched for {location}</div>
    </div>
  );
};

export default SearchHeader;
