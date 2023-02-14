import React, { createContext, useCallback, useEffect, useState } from "react";

export const CountriesContext = createContext();

const CountriesContextProvider = ({ children }) => {
  const [enteredCountryName, setEnteredCountryName] = useState("");
  const [searchedCountry, setSearchedCountry] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allCountries, setAllcountries] = useState(undefined);
  const [toggle, setToggle] = useState(false);

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
  };

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
