import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Nippy from "../components/Nippy"
import Mainbanner from "../components/Mainbanner";
import Explore from "../components/Explore";
import MediumCard from "../components/MediumCard";
import TravelApp  from "../components/TravelApp";
import Footer from "../components/Footer";




// import How_it_works from "../components/How_it_works"
// import Image from 'next/image'

export default function Home({ exploreData,cardsData} ) {
  return (

    <div className="">
      <Head>
        <title>Travela Stroage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id ="hero">
      <Banner />
      </section>

      
      <Mainbanner />
     <main className="max-w-6xl font-rubik  mx-auto px-8 sm:px-16 mt-11">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby Stroage
          </h2>
      <div className="grid grid-cols-1 font-rubik sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {exploreData?.map(({ img, distance, location}) => (
        <Explore 
        key={img}
        img={img}
         distance={distance} 
         location={location} />
      ))}

      </div>
    </section>
    <section>
    <h2 className="text-3xl font-rubik font-semibold py-8 ">Top Destinations</h2>
    <div className=" flex space-x-3 overflow-scroll scrollbar-hide p-3 -nl-3">
     {cardsData?.map(({img , title }) => (
      <MediumCard  key= { img } img= { img } title ={ title } />
      ))}
    </div>
   </section>
   
   <section id ="hero">
     <TravelApp />
   </section>
      </main>
      <Footer />
    </div>
 
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  ) ;
   const cardsData = await fetch ('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
   )

  return {
    props: { exploreData,cardsData
    },
  };
}
 


