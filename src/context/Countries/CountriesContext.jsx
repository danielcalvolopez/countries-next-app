import React, { createContext, useCallback, useState } from "react";

export const CountriesContext = createContext();

const CountriesContextProvider = ({ children }) => {
  const [enteredCountryName, setEnteredCountryName] = useState("");
  const [searchedCountry, setSearchedCountry] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allCountries, setAllCountries] = useState(undefined);
  const [toggle, setToggle] = useState(false);
  const [currentRegion, setCurrentRegion] = useState(undefined);

  const fetchCountries = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const countries = await response.json();

      const sortedCountries = countries.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
      if (enteredCountryName !== "") {
        const result = countries.filter((country) => {
          const lowerCaseName = country.name.common.toLowerCase();
          return lowerCaseName === enteredCountryName;
        });
        setAllCountries(result);
      } else {
        setAllCountries(sortedCountries);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [enteredCountryName]);

  const values = {
    searchedCountry,
    setSearchedCountry,
    enteredCountryName,
    setEnteredCountryName,
    setIsLoading,
    isLoading,
    error,
    setError,
    allCountries,
    fetchCountries,
    toggle,
    setToggle,
    currentRegion,
    setCurrentRegion,
    setAllCountries,
  };

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
