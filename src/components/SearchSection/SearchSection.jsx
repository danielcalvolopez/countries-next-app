import SelectDrop from "../UI/SelectDrop";
import TextInput from "../UI/TextInput";
import classes from "./SearchSection.module.css";

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

const SearchSection = () => {
  return (
    <div className={classes["search-section"]}>
      <TextInput placeholder="Search for a country..." />
      <SelectDrop title="Filter by Region" data={continents} />
    </div>
  );
};

export default SearchSection;
