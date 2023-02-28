import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./../components/Layout";
import EventCard from "./../components/EventCard/EventCard";
import Featured from "./../components/Home/Featured";
import Carousal from "./../components/Home/Carousal";

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Carousal />
        <Featured />

        {/* Moving Carousal - Filter by Event genres */}
        {/* Events Cards */}
        {/* Categories */}
      </Layout>
    </>
  );
}
