import type { NextPage } from "next";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-green-200 h-indexHeight">
      <Header />
    </div>
  );
};

export default Home;
