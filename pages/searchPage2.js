import React from 'react';
import {useRouter} from 'next/router';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function searchPage({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfLuggages, setNoOfLuggages] = useState(1);
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
      noOfLuggages,
    }
  });
};


  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    key:'selection',
  };

 
  

  return (
    <div className="m-auto max-w-6xl pt-12 sm: px-16  items-center ">
      
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder = {placeholder|| "Search for Location"} />
        <SearchIcon className="hidden md:inline-flex  h-8 bg-amber-600 text-white rounded-full p-2 cursor-pointer md: mx-2" />
      </div>    
      {searchInput &&(
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker 
          ranges={[selectionRange]}
           minDate={(new Date)}
           rangeColors={["#ff8503"]}
           onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-1xl flex-grow font-semibold">Number Of Luggage</h2>
             <BriefcaseIcon className="h-5" />
             <input
              value={noOfLuggages} 
              onChange= {e => setNoOfLuggages(e.target.value)}
             type="number" 
             min={1}
             className="w-12 pl-2 text-lg outline-none text-amber-600" />
           </div>
           <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={(search)} className="flex-grow text-amber-600">Search</button>
           </div>
        </div>
      
      )}
    </div>
  );
}

  
export default searchPage