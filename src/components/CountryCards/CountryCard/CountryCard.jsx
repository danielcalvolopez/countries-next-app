import classes from "./CountryCard.module.css";

const CountryCard = ({ population, region, capital, name, flag }) => {
  return (
    <div className={classes["country-card-container"]}>
      <img className={classes.flag} src={flag} />
      <div className={classes.info}>
        <p className={classes.country}>{name}</p>
        <div className={classes.details}>
          <p className={classes.title}>
            Population: <span className={classes.content}>{population}</span>
          </p>
          <p className={classes.title}>
            Region: <span className={classes.content}>{region}</span>
          </p>
          <p className={classes.title}>
            Capital: <span className={classes.content}>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
