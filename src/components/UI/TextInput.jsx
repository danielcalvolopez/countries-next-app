import classes from "./TextInput.module.css";
import { MdSearch } from "react-icons/md";

const TextInput = ({ placeholder }) => {
  return (
    <>
      <MdSearch size={25} className={classes["search-icon"]} />
      <input className={classes.input} placeholder={placeholder} type="text" />
    </>
  );
};

export default TextInput;
