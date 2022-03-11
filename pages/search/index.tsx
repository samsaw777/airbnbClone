import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchHeader from "../../components/Search/SearchHeader";
import SearchList from "../../components/Search/SearchList";
import Map from "../../components/Maps/Map";
import { useRouter } from "next/router";
import { format } from "date-fns";
const Search = ({ roomsInformation }: any) => {
  const router = useRouter();
  const { location, startDate, endDate, members } = router.query;
  const sdate: any = startDate;
  const edate: any = endDate;
  const formatedStartDate = format(new Date(sdate), "dd MMM");
  const formatedEndDate = format(new Date(edate), "dd MMM");

  const placeHolder = `${location} | ${formatedStartDate} - ${formatedEndDate} | ${members} members`;
  return (
    <div>
      <Header placeHolder={placeHolder} />
      <SearchHeader
        location={location}
        startDate={startDate}
        endDate={endDate}
        members={members}
      />
      <div className="relative  mt-5 px-5 grid grdi-cols-1 xl:grid-cols-2 gap-3 z-20">
        <div className="grid grid-cols-1 gap-4">
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
              />
            );
          })}
        </div>

        <Map searchList={roomsInformation} />
      </div>
      <Footer />
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
