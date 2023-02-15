import classes from "./SelectDrop.module.css";
import { BsChevronDown } from "react-icons/bs";
import { useContext } from "react";
import { CountriesContext } from "@/context/Countries/CountriesContext";

const SelectDrop = ({ title, data }) => {
  const { toggle, setToggle, setCurrentRegion, currentRegion } =
    useContext(CountriesContext);

  const handleOpenSelect = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className={classes["select-drop-container"]}>
      <div onClick={handleOpenSelect} className={classes.title}>
        <div>{title}</div>
        <BsChevronDown size={15} />
      </div>

      {toggle && (
        <ul className={classes.list}>
          {data.map((item) => (
            <div
              onClick={() => {
                setCurrentRegion(item);
                setToggle((prev) => !prev);
              }}
              className={
                currentRegion === item ? classes["selected-item"] : classes.item
              }
              key={item}
            >
              {item}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectDrop;
