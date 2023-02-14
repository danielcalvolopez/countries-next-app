import CountriesContextProvider from "@/context/Countries/CountriesContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CountriesContextProvider>
      <Component {...pageProps} />
    </CountriesContextProvider>
  );
}
