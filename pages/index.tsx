import type { NextPage } from "next";
import Header from "../components/Home/Header/Header";
import Banner from "../components/Home/Banner/Banner";
import SmallCard from "../components/Home/SmallCard";
const Home = (exploreData: any) => {
  console.log(exploreData);
  return (
    <div className="block">
      <Header />
      <Banner />
      {/* Location Near By */}
      <div className="max-w-7xl mx-auto px-5 sm:px-16">
        <p>Near By Location.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {exploreData?.exploreData?.map((item: any, key: number) => {
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
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return {
    props: {
      exploreData,
    },
  };
}

export default Home;

//https://links.papareact.com/pyp
