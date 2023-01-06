import React, { useState } from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    BriefcaseIcon,
    GlobeAltIcon,
    ClockIcon,
   
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(1);
  const [endTime, setEndTime] = useState(1);
  const [endDate, setEndDate] = useState(new Date());
  const [noOfLuggages, setNoOfLuggages] = useState(1);
  const [Hours, setNoOfHours] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
     setStartDate(ranges.selection.startDate);
     setEndDate(ranges.selection.endDate);
  };

const resetInput =() => {
 setSearchInput("");
};

const search = () => {
  router.push({
    pathname:'/search',
    query: {
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      startTime,
      endTime,
      noOfLuggages,
     
    }
  });
};


  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    startTime: startTime,
    endDate: endTime,
    key:'selection',
  };

 
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 font-rubik">
     {/* Left */}
       
      <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
       <h1 className=" sm:text-3xl font-bold mr-2 text-amber-600 md:text-4xl ">Travela.</h1>
        
         </div>

      {/*Middle*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder = {placeholder|| "Search for Location"} />
        <SearchIcon  className="hidden md:inline-flex  h-8 bg-amber-600 text-white rounded-full p-2 cursor-pointer md: mx-2" />
      </div>

      {/* Right */}
      <div className='flex  items-center space-x-4 justify-end text-gray-500 '>
        <p className="hidden md:inline cursor-pointer " onClick= {() =>  router.push('/login')}>Become A Member</p>
        <GlobeAltIcon className=" hidden  md:inline h-6 cursor-pointer" />
         
        <div className="flex items-center border-2 p-2 rounded-full">
         <MenuIcon className="h-6" />
         <UserCircleIcon className= "h-6" />
         </div>
        </div>
      {searchInput &&(
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker 
          ranges={[selectionRange]}
           minDate={(new Date)}
           rangeColors={["#ff8503"]}
           onChange={handleSelect}
          />
       
       
   
           <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={(search)} className="flex-grow text-amber-600">Search</button>
           </div>
        
           
        </div>
      
      )}
        
    </header>
  )
}

export default Header
