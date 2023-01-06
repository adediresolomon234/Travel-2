import React from 'react'

function TravelApp() {
  return (
    
    <div className="container font-rubik flex flex-col-reverse   md:flex-row items-center px-16 mx-auto mt-10 space-y-0 md:space-y-12 md: mb-32">
       <div className= "flex flex-col mb-32  md:w-1/2">
       <h1 className= "max-w-md mt-10 text-2xl font-bold text-center md:text-3xl md:text-left  ">Travela is trusted by 300,000+ customers, All Around the World</h1>
        <p className='max-w-md mt-10 text-center text-darkGrayishBlue md:text-left'>We have locations everywhere and you can find luggage storage near you.Any luggage you leave with us can be covered by a guarante of up to $3000</p>   
       <div className="my-5 flex justify-center md:justify-start ">
         <a href="#" class="p-3 px-6 pt-2 mt-5 text-white bg-amber-600 rounded-full baseline hover:bg-yellow-600 md:block">Select Location</a>
       </div>
    </div>
    <div className=" md:w-1/2 ">
            <img className="w-800 h-800" src="image-2.svg " alt="banner-1" />
        </div>
    </div>
  )
}

export default TravelApp