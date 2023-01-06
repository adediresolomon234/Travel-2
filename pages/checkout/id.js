import React, { useEffect, useState } from "react";
import Checkcard from "../../components/Checkcard";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";

export default function checkout({ filteredData }) {
  const [data, setData] = useState([]);
  
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
    <div>
    <Checkcard
      img={filteredData[0]?.img}
      location={filteredData[0]?.location}
      title={filteredData[0]?.title}
      description={filteredData[0]?.description}
      price={filteredData[0]?.price}
      total={filteredData[0]?.total}
      star={filteredData[0]?.star}
      hours={filteredData[0]?.hours}
      days={filteredData[0]?.days}
      distance= {filteredData[0]?.distance}
    />
    <div>
      <Footer />
    </div>
    </div>
    </main>  
   
  );

}
export async function getServerSideProps({ query }) {
  const { id } = query;
  const searchResults = await fetch("https://www.jsonkeeper.com/b/7JFX").then(
    (res) => res.json()
  );
  let filteredData = searchResults.filter((item) => item.id == id);
  return { props: { filteredData } };
}
