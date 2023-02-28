// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import Featured from "../components/Home/Featured";
import Category from "./../components/Home/Categories";
// import EventsCarousal from "../components/Home/EventsCarousal";
import { useEffect, useState } from "react";
import axios from "axios";

let content = {
  cards: [
    {
      "bg-color": "",
      heading: "",
      image: "",
      "image-desk":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
      "image-mobile":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
    },
    {
      "bg-color": "",
      heading: "",
      image: "",
      "image-desk":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
      "image-mobile":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
    },
    {
      "bg-color": "",
      heading: "",
      image: "",
      "image-desk":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
      "image-mobile":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
    },
    {
      "bg-color": "",
      heading: "",
      image: "",
      "image-desk":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
      "image-mobile":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
    },
    {
      "bg-color": "",
      heading: "",
      image: "",
      "image-desk":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
      "image-mobile":
        "https://i1.faceprep.in/feed/homepage-imgs/carousal-img-demo.png",
    },
  ],
};

// /event/allEvents?page=1&limit=10000
// ${process.env.PUBLIC_URL}/event/allEvents

export default function Home() {
  const [state, setState] = useState({ isLoading: true, pageContent: "" });

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/event/allEvents`)
      .then((response) => {
        const data = response.data;
        if (data) {
          setState({
            pageContent: { ...data[0] },
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { isLoading, pageContent } = state;
  return (
    <>
      <Layout>
        <br />
        {/* <EventsCarousal content={content} /> */}
        <Featured />
        <Category />
      </Layout>
    </>
  );
}
