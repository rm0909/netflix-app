import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/header/Header";
import TrendingComp from "../components/body/TrendingComp";

export default function Home({ trending }: any) {
  return (
    <>
      <Head>
        <title>NetFlix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <TrendingComp results={trending.results} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async (content) => {
  const res = await fetch("http://localhost:3000/api/trending");
  const { data } = await res.json();
  const trending = data;
  return {
    props: { trending }, // will be passed to the page component as props
  };
};
