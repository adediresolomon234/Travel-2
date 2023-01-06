import React from 'react';
import {useRouter} from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'animate.css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner () {
 
   const router = useRouter ()

  return (
    <div className="py-16 style={bg}">
            <div className="container mx-auto  md:px-20">
               
            <Swiper
                 spaceBetween={50}
                 centeredSlides={true}
                 autoplay={{
                   delay: 3500,
                   disableOnInteraction: false,
                 }}
                 pagination={{
                   clickable: true,
                 }}
                 
                 modules={[Autoplay, Pagination,]}
                 className="mySwiper"
                >
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide1()}</SwiperSlide>
                
                
               
                 
            </Swiper>
          
            </div>

        </div>
    
   
  );
}

function Slide(){
    return(
    <div className="m-auto font-rubik max-w-5xl pt-12 sm: px-16  items-center ">
        <div className=" flex flex-col md:flex-row">
         <div class="md:w-1/2 max-w-md flex flex-col justify-center">
             <div className="max-w-md mt-10 text-4xl font-bold text-center md:text-4xl md:text-left">
                 The Easiest Way To Store Luggage Anywhere
             </div>
             <div className="text-xl mt-10 text-center md:text-left font-poppins">
                 Find a luggage storage location near you and book in seconds.Luggege storage near you in over 1,000 Cities.
             </div>
             <div className="my-5 flex justify-center md:justify-start ">
                 <div  class="shadow-md mt-5 font-bold py-2 px-4 text-white cursor-pointer md:block
                  bg-amber-600 hover:shadow-xl rounded-full text-lg text-center active:scale-90  
                  transition duration-150 w-36" type="button" onClick= {() =>  router.push('/search')}>Get Started</div> 
             </div>
         </div>
         <div className=" md:w-1/2">
             <img className="w-800 h-900 rounded-2xl animate__animated animate__fadeInRight" src="banner-1.svg " alt="banner-1" />
         </div>
         </div>     
    
     </div>
    )
}
function Slide1(){
    return(
    <div className="m-auto font-rubik max-w-5xl pt-12 sm: px-16  items-center ">
        <div className=" flex flex-col md:flex-row">
         <div class="md:w-1/2 max-w-md flex flex-col justify-center">
             <div className="max-w-md mt-10 text-4xl font-bold text-center md:text-4xl md:text-left">
             Nappy Pad
             </div>
             <div className="text-xl mt-10 text-center md:text-left font-poppins">
             We have locations everywhere and you can find nappy  near you.
             </div>
             <div className="my-5 flex justify-center md:justify-start ">
                 <div  class="shadow-md mt-5 font-bold py-2 px-4 text-white cursor-pointer md:block
                  bg-amber-600 hover:shadow-xl rounded-full text-lg text-center active:scale-90  
                  transition duration-150 w-36" type="button" onClick= {() =>  router.push('/search')}>Get Started</div> 
             </div>
         </div>
         <div className=" md:w-1/2">
             <img className="w-800 h-900 rounded-2xl animate__animated animate__fadeInRight" src="Sleeping.svg  " alt="banner-1" />
         </div>
         </div>     
    
     </div>
    )
}
  
  

