import React, { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

const CountriesContextProvider = ({ children }) => {
  const [enteredCountryName, setEnteredCountryName] = useState("");
  const [searchedCountry, setSearchedCountry] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/name/${enteredCountryName}`
        );
        const data = await response.json();
        setSearchedCountry(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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
  };

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
