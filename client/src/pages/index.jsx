// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import EventCard from "../components/EventCard/EventCard";
import Featured from "../components/Home/Featured";
import Category from "./../components/Home/Categories";
import EventsCarousal from "../components/Home/EventsCarousal";

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

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* <EventsCarousal content={content} /> */}
        <Featured />
        <Category />
      </Layout>
    </>
  );
}
