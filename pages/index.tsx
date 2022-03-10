import type { NextPage } from "next";
import Header from "../components/Home/Header/Header";
import Banner from "../components/Home/Banner/Banner";
import SmallCard from "../components/Home/SmallCard";
import MediumCard from "../components/Home/MediumCard";
import LargeCard from "../components/Home/LargeCard";
import Footer from "../components/Footer/Footer";

const Home = ({ exploreData, mediumCardData }: any) => {
  return (
    <div className="block">
      <Header />
      <Banner />
      {/* Location Near By */}
      <main className="max-w-7xl mx-auto px-5 sm:px-16 shadow-xl shadow-gray-300">
        <div>
          <p className="text-4xl font-semibold py-8">Explore NearBy</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {exploreData?.map((item: any, key: number) => {
              return (
                <SmallCard
                  key={key}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-4xl font-semibold py-8">Live Anywhere</p>
          <div className="flex space-x-3 overflow-scroll">
            {mediumCardData?.map((cardData: any, key: number) => {
              return (
                <MediumCard
                  key={key}
                  img={cardData.img}
                  title={cardData.title}
                />
              );
            })}
          </div>
        </div>
        <div>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Whihlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json())
    .catch((error) => console.error(error));

  const mediumCardData = await fetch("https://links.papareact.com/zp1").then(
    (response) => response.json()
  );

  return {
    props: {
      exploreData,
      mediumCardData,
    },
  };
}

export default Home;

//https://links.papareact.com/pyp/zp1
