import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const EventCard = ({ props }) => {
  console.log(props);
  const router = useRouter();

  const redirectTo = (id) => {
    router.push(`/events/${id}`);
  };
  return (
    <div>
      {" "}
      <div className="w-[450px] bg-white text-[#333333] shadow-[4px_4px_10px_0px_rgba(94,94,94,0.20)] rounded-[20px] ring-[3px] ring-[#DBDBDB]">
        <div className="relative w-full h-56">
          <Image
            src={props.img}
            objectFit="cover"
            alt="Event Image"
            layout="fill"
            priority
            className="rounded-[20px]"
          />
        </div>

        <div className="flex my-5 h-[153px]">
          <div className="px-7 flex flex-col justify-center items-center w-fit pb-6">
            <h3 className="text-xl font-medium">
              {new Date(props.eventDate).toDateString().slice(4, 8)}
            </h3>
            <h1 className="text-[#F54848] text-[32px] font-semibold">
              {new Date(props.eventDate).toDateString().slice(8, 10)}
            </h1>
          </div>
          <div className="flex flex-col font-qs pr-5 overflow-hidden">
            <h3
              title={props.title}
              className="text-lg font-medium text-ellipsis whitespace-nowrap overflow-hidden w-full"
            >
              {props.title}
            </h3>
            <div className="flex-1">
              <p className="text-sm giveMeEllipsis">
                {props.desc.slice(0, 150)}
              </p>
            </div>
            <button
              onClick={() => {
                redirectTo(props.eventId);
                // setButtonLoading(true);
              }}
              className="bg-[#F54848] hover:bg-[#cf2b2b] text-white px-5 py-[5px] rounded-xl font-medium w-fit mb-6"
            >
              View Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
