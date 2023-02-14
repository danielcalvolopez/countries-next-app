import Head from "next/head";
import Header from "@/components/Header/Header";
import SearchSection from "@/components/SearchSection/SearchSection";
import CountryCards from "@/components/CountryCards/CountryCards";
import CountriesContextProvider from "@/context/Countries/CountriesContext";

const Home = () => {
  return (
    <CountriesContextProvider>
      <Head>
        <title>Countries App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <SearchSection />
      <CountryCards />
    </CountriesContextProvider>
  );
};

export default Home;
