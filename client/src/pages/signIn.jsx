import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { dispatch } = useAuthContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      const res = await axios({
        baseURL: "http://localhost:3300",
        url: `/api/auth/login`,
        method: "POST",
        data: userData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res.status === 200) {
        const { username, email } = res.data;
        localStorage.setItem(
          "user",
          JSON.stringify({ user: { username, email } })
        );

        dispatch({
          type: "LOGIN",
          payload: {
            user: { username, email },
          },
        });
        toast.success("Logged In Successfully!");
        router.push("/");
      }
    } catch (error) {
      toast.warn("Incorrect Username or Pasword!");
    }
  };

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              className="w-50 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#F54848] rounded-md hover:bg-[#eb1b1b] focus:outline-none "
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            href="/signUp"
            className="font-medium text-red-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
