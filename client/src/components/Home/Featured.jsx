import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "./../../components/EventCard/EventCard";

const Featured = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3300/api/event/allEvents`)
      .then((response) => {
        const data = response.data.result;
        if (data) {
          setContent([...data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(content);

  return (
    <>
      <div f-vt className="f-d f-h-c f-vt f-v-c tb-pad-d lr-pad-d">
        <div className="pb-7 text-5xl font-semibold">Trending Events</div>
        <div className=" sm:grid xl:grid-cols-3 flex flex-col md:grid-cols-2 gap-12 w-full">
          {content.map((data) => {
            return <EventCard props={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
