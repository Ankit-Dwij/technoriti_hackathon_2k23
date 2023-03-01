import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import Featured from "../components/Home/Featured";
import Category from "./../components/Home/Categories";
import EventsCarousal from "../components/Home/EventsCarousal";

export default function Home() {
  return (
    <>
      <Layout>
        <br />
        {/* <EventsCarousal /> */}
        <Featured />
        <Category />
      </Layout>
    </>
  );
}
