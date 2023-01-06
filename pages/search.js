import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Map from "../components/Map";
import { useEffect } from "react";
import LocationCard from "../components/LocationCard";
import React, { useState } from 'react';
import PlacesAutocomplete from "react-places-autocomplete";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ClockIcon,

} from '@heroicons/react/solid';

function Search({ searchResults, placeholder }) {
  const router = useRouter();
  //   useEffect(() => {
  //       window.localStorage.setItem('data', JSON.stringify(searchResults));

  //   }, []);

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(1);
  const [endTime, setEndTime] = useState(1);
  const [endDate, setEndDate] = useState(new Date());
  const [noOfLuggages, setNoOfLuggages] = useState(1);
  const [Hours, setNoOfHours] = useState(1);


  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: '/search',
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
    startDate: startDate,
    endDate: endDate,
    startTime: startTime,
    endDate: endTime,
    key: 'selection',
  };



  return (
    <div>
      <Header
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">

          <div className=" flex grid grid-cols md:grid-cols-3 gap-y-2 px-3 py-1 text-gray-600">
            <div className=" flex-grow  text-center mb-5 gap-y-4 text-sm font-bold text-gray-800">
              <label for="check-in-date ">Drop Off Time | Date </label>
              <form >
                <input value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                  min={1} type="time" id="Hours" className="block w-full py-2 px-3 mt-3 border-4 text-center outline-amber-500 rounded-md text-gray-700" />
              </form>
              <div className="flex-grow text-center text-sm mb-5 text-gray-800 font-bold gap-y-4">
                <form>
                  <input value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    min={1} type="date" id="Hours" className="block w-full py-2 px-3 mt-3 text-center border-4 outline-amber-500 rounded-md   text-gray-700" />
                </form>
              </div>
            </div>

            <div className="flex-grow pl-5 text-center text-sm mb-5 text-gray-800 font-bold gap-y-4">
              <label for="check-in-date font-bold ">Pick Up Time | Date</label>
              <form>
                <input value={endTime}
                  onChange={e => setEndTime(e.target.value)}
                  min={1} type="time" id="Hours" className="block w-full py-2 px-3 mt-3 text-center border-4 outline-amber-500 rounded-md   text-gray-700" />
              </form>
              <div className="flex-grow  text-center text-sm mb-5 text-gray-800 font-bold gap-y-4">

                <form>
                  <input value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    min={1} type="date" id="Date" className="block w-full py-2 px-3 mt-3 text-center border-4 outline-amber-500 rounded-md   text-gray-700" />
                </form>

              </div>

            </div>

            <div className="flex-grow pl-5 text-center text-sm mb-5 text-gray-800 font-bold  gap-y-4">
              <label for="check-in-date font-bold ">Number Of Bags </label>
              <form>

                <input value={noOfLuggages}
                  onChange={e => setNoOfLuggages(e.target.value)}
                  min={1} type="number" id="Hour" className="block w-full py-2 px-3 mt-3 text-center border-4 outline-amber-500 rounded-md  text-gray-700" />
              </form>

            </div>

          </div>
          <div className="flex flex-col">
            {searchResults.map((searchResults) => (
              <LocationCard
                id={searchResults.id}
                key={searchResults.id}
                img={searchResults.img}
                location={searchResults.location}
                title={searchResults.title}
                description={searchResults.description}
                total={searchResults.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[700px] xl:flex-grow ">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/XRE1").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
