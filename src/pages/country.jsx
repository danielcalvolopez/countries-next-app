import Header from "@/components/Header/Header";
import Button from "@/components/UI/Button";
import classes from "../styles/Country.module.css";

const country = () => {
  return (
    <div>
      <Header />
      <div className={classes["button-section"]}>
        <Button>Back</Button>
      </div>
    </div>
  );
};

export default country;
