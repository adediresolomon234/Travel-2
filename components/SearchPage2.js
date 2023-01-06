import React, { useState } from 'react';
import Image from 'next/image';
import {
    MenuIcon,
    UserCircleIcon,
    GlobeAltIcon,
   } from '@heroicons/react/solid';

function Header() {


  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
     {/* Left */}
       
      <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
       <h1 className=" sm:text-3xl font-bold mr-2 text-amber-600 md:text-4xl ">Travela.</h1>
        
         </div>

      {/*Middle*/}
   

      {/* Right */}
      <div className='flex  items-center space-x-4 justify-end text-gray-500 '>
        <p className="hidden md:inline cursor-pointer">Become A Member</p>
        <GlobeAltIcon className=" hidden  md:inline h-6 cursor-pointer" />
         
        <div className="flex items-center border-2 p-2 rounded-full">
         <MenuIcon className="h-6" />
         <UserCircleIcon className= "h-6" />
         </div>
        </div>
   
        
    </header>
  )
}

export default Header
