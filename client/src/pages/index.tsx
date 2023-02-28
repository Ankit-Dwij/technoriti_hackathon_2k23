import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./../components/Layout";
import EventCard from "./../components/EventCard/EventCard";

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* Moving Carousal - Filter by Event genres */}
        {/* Events Cards */}
        {/* Categories */}
      </Layout>
    </>
  );
}
