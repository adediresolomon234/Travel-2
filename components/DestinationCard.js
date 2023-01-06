import MediumCard from "./MediumCard";
import'animate.css';
export default function DestinationsCard({ cardsData} ) {
  return(
    <div>
      
    {cardsData?.map(({ img, title}) => (
      <MediumCard 
      key={img}
      img={img}
      title={title} 
        />
    ))}

</div> 
 );
}
export async function getStaticProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const cardsData = await res.json();
 
  return {
    props: { cardsData
    },
  };
}