import Header from "@/components/Header/Header";
import Button from "@/components/UI/Button";
import classes from "../styles/Country.module.css";
import { BsArrowLeft } from "react-icons/bs";

const country = () => {
  return (
    <div>
      <Header />
      <div className={classes["body-container"]}>
        <div className={classes["button-section"]}>
          <Button>
            <BsArrowLeft size={20} />
            Back
          </Button>
        </div>
        <div className={classes["body-content"]}>
          <div className={classes.flag}>flag</div>
          <div className={classes["info-container"]}>
            <h2 className={classes.name}>Belgium</h2>
            <div className={classes.details}>
              <div className={classes["details-column"]}>
                <p>
                  Native Name:{" "}
                  <span className={classes["details-content"]}>België</span>
                </p>
                <p>
                  Population:{" "}
                  <span className={classes["details-content"]}>11,319,511</span>
                </p>
                <p>
                  Region:{" "}
                  <span className={classes["details-content"]}>Europe</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className={classes["details-content"]}>
                    Western Europe
                  </span>
                </p>
                <p>
                  Capital:{" "}
                  <span className={classes["details-content"]}>Brussels</span>
                </p>
              </div>
              <div className={classes["details-column"]}>
                <p>
                  Top Level Domain:{" "}
                  <span className={classes["details-content"]}>.be</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span className={classes["details-content"]}>Euro</span>
                </p>
                <p>
                  Languages:{" "}
                  <span className={classes["details-content"]}>
                    Dutch, French, German
                  </span>
                </p>
              </div>
            </div>
            <div className={classes["borders-container"]}>
              <p>Border countries: </p>
              <div className={classes.borders}>
                <div className={classes.border}>France</div>
                <div className={classes.border}>Germany</div>
                <div className={classes.border}>Netherlands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default country;
