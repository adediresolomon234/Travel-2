import React from 'react';
import {
    MapIcon,
    ClipboardCheckIcon,
    HomeIcon,
    EmojiHappyIcon,
    
    
  } from '@heroicons/react/solid';

function mainbanner() {
  return (
    <main className="max-w-6xl mx-auto font-rubik px-8 sm:px-16 " >
    <section className="pt-6 ">
 
     <h2 className=" text-3xl font-semibold pb-5 text-center mt-12 ">How It Works</h2>
      <div className="grid  md:grid-cols-4 gap-10 auto-cols-max mt-12  sm: grid-cols-1 ">
       
       <div className="grid place-items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out  ">
       <MapIcon className="h-6  cursor-pointer text-amber-600 mb-3 " />
       <p className="text-gray-400 font-light text-sm">Step 1</p>
       <h1 className="font-bold text-lg">Select A Location</h1>
       <p className="text-gray-400 font-light text-center text-md">Find a luggage storage location </p>
       </div>
 
       <div className="grid place-items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
       <ClipboardCheckIcon className="h-6  cursor-pointer text-amber-600 mb-3" />
       <p className="text-gray-400 font-light text-sm">Step 2</p>
       <h1 className="font-bold text-lg">Book</h1>
       <p className="text-gray-400 font-light text-md">Proceed with online booking</p>
       </div>
       <div className="grid place-items-center  cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
       <HomeIcon className="h-6  cursor-pointer text-amber-600 mb-3" />
       <p className="text-gray-400 font-light text-sm">Step 3</p>
       <h1 className="font-bold text-lg">Store</h1>
       <p className="text-gray-400 font-light text-md">Store your luggages</p>
       </div>
       <div className="grid place-items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
       <EmojiHappyIcon className="h-6  cursor-pointer text-amber-600 mb-3" />
       <p className="text-gray-400 font-light text-sm">Step 4</p>
       <h1 className="font-bold text-lg">Enjoy</h1>
       <p className="text-gray-400 font-light text-md">Enjoy your hands-free journey</p>
       </div>
       
      </div>
    </section>
    
    </main>
  )
}

export default mainbanner