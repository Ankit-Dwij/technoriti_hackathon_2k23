import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const user = true;

  return (
    <>
      <div className="navbar-container lr-pad-d lr-pad-m f-d f-v-c f-h-sb">
        <div className="left-nav-container f-d f-v-c f-h-sb">
          {/* <Image
            className="card-logo-img"
            src="/bms_logo.png"
            alt="brand-logo"
            width="130"
            height="40"
          /> */}
          <h1 className="b-logo">EVENTO</h1>
          <span className="nav-item">Browse</span>
          <span className="nav-item">Events</span>
          <span className="nav-item">Register</span>
        </div>

        <div className="right-nav-container f-d f-v-c hide-m">
          {!user ? (
            <>
              <div
                className="nav-btn-orange nav-item c-pointer "
                onClick={() => {
                  router.push("/signUp");
                }}
              >
                Sign Up
              </div>
              <div
                className="nav-btn-orange-outline nav-item c-pointer"
                onClick={() => {
                  router.push("/signIn");
                }}
              >
                Log In
              </div>
            </>
          ) : (
            <span>Hey ! Ankit</span>
          )}
        </div>
      </div>
      <style jsx>{`
        .b-logo {
          font-size: 22px;
          color: #797777;
        }
        .nav-item {
          margin-left: 10px;
        }
        .navbar-container {
          height: 64px;
          width: 100vw;
          background: #ffffff;
          border-bottom: double #dddbdb;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }
        .navbar-container .brand-logo {
          margin-right: 2.4rem;
          height: 26px;
          width: 196px;
        }
        .nav-item {
          margin-left: 2rem;
        }
        .nav-btn-orange {
          width: 139px;
          height: 40px;
          padding: 8px 39px;
          background: #f05136;
          border: none;
          border-radius: 14px;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: white;
        }
        .nav-btn-orange-outline {
          width: 120px;
          height: 35px;
          padding: 4px 20px;
          border: 2px solid #f05136;
          border-radius: 8px;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
      `}</style>
    </>
  );
};

export default Header;
