import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Footer from "./Footer";


const Checkout1 = ({id,img, location, title, description, star, price, total,hours,days,distance,}) => {
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");
    const router = useRouter();
    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    return (
        <div className=" rounded-2xl font-rubik ">
        <div className="flex justify-center font-rubik items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col item-center items-start space-y-2">
                        <button onClick={() => router.push("/")}  className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                            <svg className="fill-stroke" width="24" height="24"viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-1xl leading-none ">Back</p>
                        </button>
                        
                    </div>

                    <div className="flex flex-col  xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0  xl:space-x-6 ">
                        <div className="xl:w-3/5 flex flex-col   xl:flex-col justify-center items-start bg-white-100 py-7 sm:py-0 xl: px-10 xl:w-full">
                         <div className=" m-auto relative h-100 sm:mt-0 sm:items-center xl:my-10 xl: sm:w-96 items-center xl:w-3/5">
                             <img src={img} layout="fill" objectFit="fill" className="rounded-2xl  sm:items-center justify-center" />
                            </div>

                            <div className="flex flex-col justify-center items-start w-full space-y-4 m-auto  ">
                                <p className="text-xl md:text-2xl leading-normal font-bold m-auto  text-gray-800">{title}</p>
                                
                                <p className="m-auto text-base font-semibold leading-none flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>- {star}  | {distance}
                                </p>
                                <div >
                                <hr class="my-8 h-px bg-gray-700 border-3 dark:bg-gray-700"/>
                              <p className="font-bold text-2xl">{location}</p>  
                              </div>
                              <div className="flex items-center text-gray-500 ">
                                <h1 className="text-1xl font-bold mt-3 "><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#030D45"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.10256C12.4249 6.10256 12.7693 6.44696 12.7693 6.8718V12C12.7693 12.204 12.6882 12.3997 12.544 12.5439L9.46703 15.6209C9.16662 15.9213 8.67957 15.9213 8.37917 15.6209C8.07877 15.3204 8.07877 14.8334 8.37917 14.533L11.2308 11.6814V6.8718C11.2308 6.44696 11.5752 6.10256 12 6.10256Z" fill="#030D45"/>
                                    </svg>  </h1>
                                <h1 className="pl-2 mt-3 font-bold">Opening Days : {days}</h1>
                                </div>
                                <div className="flex items-center text-gray-500 ">
                                <h1 className="text-1xl font-bold mt-3 ">
                                <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-door-open-fill">
                                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                </svg> </h1>
                                <h1 className="pl-2 mt-3 font-bold">Opening And Closing Hours : {hours}</h1>
                                </div>
                                
                                </div>
                                <button className="box-content h-5 mt-4 w-2/3 bg-gray-300 text-black rounded-2xl p-4 border-4">
                                <div>
                                    <p className=" text-2xl leading-4">How does Travela works?</p>
                                </div>
                            </button>
                               
                        </div>

                        <div className="p-8 bg-white -100 flex flex-col lg:w-full xl:w-3/5 h-1/2 shadow-xl rounded-xl">

                            <div className="mt-8">
                             <h1 className="font-bold text-2xl"> Checkout </h1>   
                            </div>

                            <div className="mt-2 flex-col">

                                <div className=" flex grid grid-cols-2 md:grid-cols-2 gap-y-2 mt-9 px-3 py-1 text-gray-600">
                                    <div className=" flex-grow pr-5 text-center mb-5 gap-y-4 text-sm text-gray-800">
                                    <label for="check-in-date ">Check-in Time:</label>
                                    <form >
                                     <input type="time" id="Hours" className="block w-full py-2 px-3 mt-3 border-4 text-center outline-amber-500 rounded-md text-gray-700"/> 
                                    </form>
                                    </div>
                                <div className="flex-grow pl-5 text-center text-sm mb-5 text-gray-800 gap-y-4">
                                    <label for="check-in-date ">Check-out Time:</label>
                                    <form>
                                    <input type="time" id="Hours" className="block w-full py-2 px-3 mt-3 text-center border-4 outline-amber-500 rounded-md  text-lg text-gray-700"/>
                                    </form>
                                    </div>
                                </div> 
                            </div>

                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
                            <div className="mt-2 flex-col">
                                <div className="relative">
                                    <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                                        {country}
                                    </button>
                                    <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                                        {countries.map((country) => (
                                            <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
                                                {country}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
                            </div>

                            <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <p className="text-base leading-4">Make Payment</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        </div>
        
    );
};

export default Checkout1;
