import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
const Home: NextPage = () => {
  return (
    <div className="h-indexHeight">
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
