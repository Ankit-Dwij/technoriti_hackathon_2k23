import React from "react";

const Event = () => {
  return <div>Event</div>;
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/event/getEvent?eventId=${id}`
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
