import { CountriesContext } from "@/context/Countries/CountriesContext";
import { useCallback, useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard/CountryCard";
import classes from "./CountryCards.module.css";

const CountryCards = () => {
  const { isLoading, setIsLoading, error, setError } =
    useContext(CountriesContext);
  const [allCountries, setAllcountries] = useState(undefined);

  const fetchCountries = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const countries = await response.json();
      setAllcountries(countries);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

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
      <CountryCard data={allCountries} />
    </div>
  );
};

export default CountryCards;
