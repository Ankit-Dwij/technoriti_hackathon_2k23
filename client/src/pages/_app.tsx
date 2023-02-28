import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext.js";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          closeOnClick
          hideProgressBar
        />
      </AuthContextProvider>
    </>
  );
}
