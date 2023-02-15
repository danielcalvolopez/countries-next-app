import { CountriesContext } from "@/context/Countries/CountriesContext";
import { useContext, useEffect } from "react";
import CountryCard from "./CountryCard/CountryCard";
import classes from "./CountryCards.module.css";

const CountryCards = () => {
  const { fetchCountries, allCountries, currentRegion } =
    useContext(CountriesContext);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const filteredByRegion = allCountries
    ?.filter((country) => {
      return country.region === currentRegion;
    })
    .sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });

  return (
    <div className={classes["country-cards-container"]}>
      {currentRegion === undefined
        ? allCountries?.map(({ name, population, capital, region, flags }) => (
            <CountryCard
              key={name.common}
              flag={flags.svg}
              name={name.common}
              region={region}
              population={population}
              capital={capital}
            />
          ))
        : filteredByRegion?.map(
            ({ name, population, capital, region, flags }) => (
              <CountryCard
                key={name.common}
                flag={flags.svg}
                name={name.common}
                region={region}
                population={population}
                capital={capital}
              />
            )
          )}
    </div>
  );
};

export default CountryCards;
