import React from "react";
import Image from "next/image";

let event = {
  imageUrl: "https://www.surfertoday.com/images/stories/hawaiiisland.jpg",
  eventDate: new Date(),
  title: "Technoriti 2k23",
  description:
    "In this example, we’ll create and add three images with different sources, one will be imported from the public directory, the second image will be served through the static path from the public directory and the other one will be served from an external URL",
};

const EventCard = () => {
  return (
    <div>
      {" "}
      <div className="w-[450px] bg-white text-[#333333] shadow-[4px_4px_10px_0px_rgba(94,94,94,0.20)] rounded-[20px] ring-[3px] ring-[#DBDBDB]">
        <div className="relative w-full h-56">
          <Image
            src={event.imageUrl}
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
              {new Date(event.eventDate).toDateString().slice(4, 8)}
            </h3>
            <h1 className="text-[#F54848] text-[32px] font-semibold">
              {new Date(event.eventDate).toDateString().slice(8, 10)}
            </h1>
          </div>
          <div className="flex flex-col font-qs pr-5 overflow-hidden">
            <h3
              title={event.title}
              className="text-lg font-medium text-ellipsis whitespace-nowrap overflow-hidden w-full"
            >
              {event.title}
            </h3>
            <div className="flex-1">
              <p className="text-sm giveMeEllipsis">{event.description}</p>
            </div>
            <button
              onClick={() => {
                redirectTo(event.eventId);
                setButtonLoading(true);
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
