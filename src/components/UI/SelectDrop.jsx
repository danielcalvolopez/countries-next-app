import classes from "./SelectDrop.module.css";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const SelectDrop = ({ title, data }) => {
  const [toggle, setToggle] = useState(false);

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
            <li className={classes.item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectDrop;
