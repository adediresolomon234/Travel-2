import {useRouter} from 'next/router';
import 'animate.css';
import {
  EyeIcon,
 
} from '@heroicons/react/solid';

export default function Layout ({children}){
  return(
    <div className="bg-gray-100 font-rubik min-h-screen flex items-center justify-center">
     <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
          <div className="md:w-1/2 px-16"> 
           <h2 className="font-bold text-amber-600">Login</h2>
           <p className="text-sm mt-4">If you already member
            , easily log
           </p>

           <form action="" className="flex flex-col gap-4">
             <input className="w-full p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Email"></input>
            <div className="relative">
             <input className="p-2 rounded-xl border w-full"type="password" name="password" placeholder="Password"/>
             <svg xmlns="http://www.w3.org/2000/svg" fill= "text-gray-500" height="16px" className=" absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
             
            </div>  
            <button className="bg-amber-600 text-white py-2 rounded-xl">Login</button>
           </form>

           <div className="mt-10 grid grid-cols-3 items-center text-bg-amber-600"> 
               <hr className="border-gray-500"/>
                <p className="text-center text-sm text-gray-400 border-gray-400">OR </p>
               <hr className="border-gray-500"/> 
               
           </div>
           <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm"><svg className="mr-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>Login with Google</button>
           <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm"><svg className="mr-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>Login with Facebook</button>
            <p className="mt-10 text-xs border-b py-6">Forget your password?</p>

            <div className="mt-3 text-xs flex justify-between item-center">
              <p className='mt-3' >Don't have an account</p>
              <button className="py-2 px-5 bg-white border rounded-xl">Register</button>
            </div>
          </div>
      
        <div className=" sm:block hidden w-1/2">
        <img className=" rounded-2xl animate__animated animate__pulse animate__repeat-2"  src="Travel.svg " alt="Login" />
        </div>
    </div> 
    {children}
</div>
   
  )
}