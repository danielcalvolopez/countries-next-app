import { CountriesContext } from "@/context/Countries/CountriesContext";
import { useContext } from "react";
import SelectDrop from "../UI/SelectDrop";
import TextInput from "../UI/TextInput";
import classes from "./SearchSection.module.css";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const SearchSection = () => {
  const { enteredCountryName, setEnteredCountryName } =
    useContext(CountriesContext);

  const handleSearchInput = (event) => {
    setEnteredCountryName(event.target.value);
  };

  return (
    <div className={classes["search-section"]}>
      <TextInput
        value={enteredCountryName}
        onChange={handleSearchInput}
        placeholder="Search for a country..."
      />
      <SelectDrop title="Filter by Region" data={regions} />
    </div>
  );
};

export default SearchSection;
