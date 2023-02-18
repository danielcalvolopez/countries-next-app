import Head from "next/head";
import SearchSection from "@/components/SearchSection/SearchSection";
import CountryCards from "@/components/CountryCards/CountryCards";
import { CountriesContext } from "@/context/Countries/CountriesContext";
import { useContext } from "react";
import Backdrop from "@/components/UI/Backdrop";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"), {
  ssr: false,
});

const Home = () => {
  const { toggle, setToggle } = useContext(CountriesContext);
  const handleCloseModal = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Countries App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      {toggle && <Backdrop onClick={handleCloseModal} />}
      <Header />
      <SearchSection />
      <CountryCards />
    </>
  );
};

export default Home;
