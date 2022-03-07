import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchHeader from "../../components/Search/SearchHeader";
import { useRouter } from "next/router";
import { format } from "date-fns";
const Search = () => {
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
      <Footer />
    </div>
  );
};

export default Search;
