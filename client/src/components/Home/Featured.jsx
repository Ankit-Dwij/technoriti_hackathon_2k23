import React from "react";
import EventCard from "./../../components/EventCard/EventCard";

const Featured = () => {
  return (
    <>
      <div className="tb-pad-d lr-pad-d sm:grid xl:grid-cols-3 flex flex-col md:grid-cols-2 gap-12 w-full">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      {/* <button>Explore Events</button> */}
    </>
  );
};

export default Featured;
