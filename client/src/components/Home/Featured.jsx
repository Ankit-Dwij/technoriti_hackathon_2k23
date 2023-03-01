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
      <div className="tb-pad-d lr-pad-d sm:grid xl:grid-cols-3 flex flex-col md:grid-cols-2 gap-12 w-full">
        {content.map((data) => {
          return <EventCard props={data} />;
        })}
      </div>
    </>
  );
};

export default Featured;
