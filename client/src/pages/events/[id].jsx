import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import { Rating } from "react-simple-star-rating";
import { Icon } from "antd";

const Event = ({ eventData }) => {
  const [ratio, setRatio] = useState(16 / 9);
  const [rating, setRating] = useState(eventData.rating);

  useEffect(() => {
    setRating(eventData.rating);
  }, [rating]);

  const shareWithTwitter = () => {
    const textStr = `Checkout my ticket for ${eventData.title} at `;
    const encodedText = encodeURI(textStr);
    const encodedUrl = encodeURI(window.location.href);
    const twitterLink = `http://twitter.com/share?text=${encodedText}&url=${encodedUrl}`;
    window.open(twitterLink, "_blank");
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleClick = () => {
    toast.error("Feature development in progress!");
  };

  console.log(eventData);
  return (
    <>
      <Layout>
        <div className="main-cont lr-pad-d tb-pad-d f-vt f-d f-h-c f-v-c">
          {/* <div className="left-contnr w-50 "> */}
          <div className="flex flex-col justify-center items-center mt-4">
            <div className="w-full">
              <div className="md:flex hidden items-center justify-center">
                <Image
                  src={eventData.img || ""}
                  alt="event-image"
                  width={700}
                  height={200}
                  objectFit="cover"
                  priority
                  className="opacity-50 rounded-[20px]"
                />
              </div>

              <div className="relative md:bottom-[10rem] rounded-[20px] w-full md:w-fit h-fit mx-auto flex justify-center">
                <Image
                  src={eventData.img || ""}
                  alt="event-image"
                  width={400}
                  height={400 / ratio}
                  layout="fixed"
                  className="rounded-[20px]"
                />
              </div>
              <span className="relative bottom-[150px] text-lg">
                {eventData.genre.toUpperCase()}
              </span>
              <div className="rating-comp relative bottom-[150px] text-lg">
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  initialValue={rating}
                  size={30}
                  label
                  transition
                  fillColor="orange"
                  emptyColor="gray"
                  className="foo" // Will remove the inline style if applied
                />
                {`   ${rating}`}
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="right-contnr w-50"> */}
          <div className="flex relative bottom-[100px] w-2/3 flex-col justify-start items-center px-10 mt-4">
            <h1 className="text-4xl  font-semibold text-[#333333] text-center mb-2">
              {eventData.title.toUpperCase()}
            </h1>
            <p className="text-center">{eventData.desc}</p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="relative flex justify-center items-center bottom-[100px] border-[#FFA9A9] border-2 rounded-[14px] mt-4 p-1 px-4">
              <div className="m-5">
                <h4 className="text-center text-lg">Event Date</h4>
                <h2 className=" text-red font-bold text-emerald-500 text-2xl text-center my-3">
                  {new Date(eventData.eventDate)
                    .toDateString()
                    .toUpperCase()
                    .slice(4, 8)}
                  {new Date(eventData.eventDate).toDateString().slice(8, 10)}
                </h2>
              </div>
              <div className="m-5">
                <h4 className="text-center text-lg">Venue</h4>
                <h2 className=" text-red font-bold text-emerald-500 text-2xl text-center my-3">
                  {eventData.city}
                </h2>
              </div>
              <div className="m-5">
                <h4 className="text-center text-lg">Price</h4>
                <h2 className="text-red font-bold text-emerald-500 text-2xl text-center my-3">
                  Rs. {eventData.price}
                </h2>
              </div>
            </div>
            <div className="">
              <div
                className="m-5 relative bottom-[100px] mx-5 nav-btn-orange nav-item c-pointer"
                onClick={handleClick}
              >
                Book
              </div>
              <div
                className="m-5 relative bottom-[100px] mx-5 nav-btn-orange nav-item c-pointer"
                onClick={shareWithTwitter}
              >
                <Icon type="share-alt" className="pr-2" />
                Share
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </Layout>
      <style jsx>{`
        .main-cont {
           {
            /* height: 80vh; */
          }
          overflow: hidden;
        }
        .nav-btn-orange {
          width: 150px;
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
        .star-svg {
          display: inline;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps = async ({ res, query }) => {
  const { id } = query;
  if (id === "undefined") {
    res.statusCode = 302;
    res.setHeader("Location", "/browse");
    return { props: {} };
  }
  let eventData = {};
  if (id) {
    try {
      const response = await fetch(
        `http://localhost:3300/api/event/getEvent?eventId=${id}`
      );
      const res = await response.json();
      eventData = res.event;
    } catch (err) {
      console.error(err);
    }
  }
  return {
    props: {
      eventData,
    },
  };
};

export default Event;
