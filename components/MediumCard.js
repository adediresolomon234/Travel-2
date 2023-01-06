import  Image from "next/image"

function MediumCard({img, title}) {
  return (
    <div className="cursor-pointer font-rubik hover:scale-105 transform translate duration-300 ease-out x mandatory-scroll-snapping always-stop">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-1xl  m-7 mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard