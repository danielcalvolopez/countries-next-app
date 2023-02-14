import classes from "./TextInput.module.css";
import { MdSearch } from "react-icons/md";

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <>
      <MdSearch size={25} className={classes["search-icon"]} />
      <input
        value={value}
        onChange={onChange}
        className={classes.input}
        placeholder={placeholder}
        type="text"
      />
    </>
  );
};

export default TextInput;
