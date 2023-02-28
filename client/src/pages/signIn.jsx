import React,{useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router';


export default function Login() {
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const router = useRouter();

function handleClick() {
  router.push('/signUp');
}
const handleSubmit = async (e)=>{
  e.preventDefault();
  const userData ={
    email,
    password
  }

 // console.log("payload",userData)
 // sending data to the server
  try{
  const {data} =await axios({
    url:"/api/userData",
    method:"POST",
   data:userData
  })
  console.log("respone" ,data);
  }catch(error){
console.log("Error",error);
  }
}

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-red-600 ">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-red-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button 
            onClick={handleSubmit}
            className="w-50 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#F54848] rounded-md hover:bg-[#eb1b1b] focus:outline-none ">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="/signUp" className="font-medium text-red-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
