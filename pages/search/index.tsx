import { useState } from "react";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchHeader from "../../components/Search/SearchHeader";
import SearchList from "../../components/Search/SearchList";
import Map from "../../components/Maps/Map";
import { useRouter } from "next/router";
import { format } from "date-fns";

interface SelectedLocation {
  lat: number;
  long: number;
  index: number;
}

const Search = ({ roomsInformation }: any) => {
  const router = useRouter();
  const { location, startDate, endDate, members } = router.query;
  const sdate: any = startDate;
  const edate: any = endDate;
  const [selectedLocation, setSelectedLocation] = useState<
    SelectedLocation | any
  >({});
  const formatedStartDate = format(new Date(sdate), "dd MMM");
  const formatedEndDate = format(new Date(edate), "dd MMM");

  const placeHolder = `${location} | ${formatedStartDate} - ${formatedEndDate} | ${members} members`;
  return (
    <div>
      <Header placeHolder={placeHolder} />
      {/* <SearchHeader
        location={location}
        startDate={startDate}
        endDate={endDate}
        members={members}
      /> */}

      <div className="relative z-20 bg-[#051529]">
        <div className=" relative z-50 top-[400px]">
          <div className="w-full md:w-3/4 md:mx-auto grid grid-cols-1 gap-4 bg-white rounded-[30px] py-10 shadow-xl px-10">
            {roomsInformation.map((room: any, key: number) => {
              return (
                <SearchList
                  image={room.img}
                  title={room.title}
                  description={room.description}
                  location={room.location}
                  price={room.price}
                  total={room.total}
                  star={room.star}
                  key={key}
                  lat={room.lat}
                  index={key}
                  long={room.long}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                />
              );
            })}
          </div>
          <Footer />
        </div>
        <Map
          searchList={roomsInformation}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const roomInformation = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      roomsInformation: roomInformation,
    },
  };
}

export default Search;
