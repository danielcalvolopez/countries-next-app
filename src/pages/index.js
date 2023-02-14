import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Header />
    </>
  );
}
