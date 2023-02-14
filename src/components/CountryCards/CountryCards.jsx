import { CountriesContext } from "@/context/Countries/CountriesContext";
import { useContext, useEffect } from "react";
import CountryCard from "./CountryCard/CountryCard";
import classes from "./CountryCards.module.css";

const CountryCards = () => {
  const { isLoading, fetchCountries, allCountries } =
    useContext(CountriesContext);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className={classes["country-cards-container"]}>
      {isLoading ? (
        <p>Loading... </p>
      ) : (
        allCountries?.map(({ name, population, capital, region, flags }) => (
          <CountryCard
            key={name.common}
            flag={flags.svg}
            name={name.common}
            region={region}
            population={population}
            capital={capital}
          />
        ))
      )}
    </div>
  );
};

export default CountryCards;
