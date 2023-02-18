import Button from "@/components/UI/Button";
import classes from "../styles/Country.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"), {
  ssr: false,
});

const country = () => {
  const router = useRouter();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    if (router.query.countryDetails) {
      getCountryByCode(router.query.countryDetails);
    }
  }, [router.query.countryDetails]);

  const getCountryByCode = async (param) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${param}?fullText=true`
      );

      if (!res.ok) throw new Error("Couldn't fetch country!");

      const data = await res.json();

      setCountry(data);
    } catch (error) {}
  };

  return (
    <div>
      <Header />
      <div className={classes["body-container"]}>
        <div className={classes["button-section"]}>
          <Button>
            <Link className={classes.link} href="/">
              <BsArrowLeft size={20} />
              Back
            </Link>
          </Button>
        </div>

        {country?.map((country) => (
          <div key={country.cca3} className={classes["body-content"]}>
            <div className={classes["flag-container"]}>
              <img className={classes.flag} src={country.flags.svg} alt="" />
            </div>
            <div className={classes["info-container"]}>
              <h2 className={classes.name}>{country?.name.common}</h2>
              <div className={classes.details}>
                <div className={classes["details-column"]}>
                  <p className={classes.list}>
                    Native Name:{" "}
                    {Object.values(country.name.nativeName).map((name) => (
                      <span
                        key={name.official}
                        className={classes["details-content"]}
                      >
                        {name.official}{" "}
                      </span>
                    ))}
                  </p>
                  <p>
                    Population:{" "}
                    <span className={classes["details-content"]}>
                      {country?.population}
                    </span>
                  </p>
                  <p>
                    Region:{" "}
                    <span className={classes["details-content"]}>
                      {country?.region}
                    </span>
                  </p>
                  <p>
                    Sub Region:{" "}
                    <span className={classes["details-content"]}>
                      {country?.subregion}
                    </span>
                  </p>
                  <p>
                    Capital:{" "}
                    <span className={classes["details-content"]}>
                      {country?.capital}
                    </span>
                  </p>
                </div>
                <div className={classes["details-column"]}>
                  <p>
                    Top Level Domain:{" "}
                    <span className={classes["details-content"]}>
                      {country?.tld[0]}
                    </span>
                  </p>
                  <p className={classes.list}>
                    Currencies:{" "}
                    {Object.values(country.currencies).map((currency) => (
                      <span
                        key={currency.name}
                        className={classes["details-content"]}
                      >
                        {currency.name}{" "}
                      </span>
                    ))}
                  </p>
                  <p className={classes.list}>
                    Languages{" "}
                    {Object.values(country.languages).map((language) => (
                      <span
                        key={language}
                        className={classes["details-content"]}
                      >
                        {language}{" "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className={classes["borders-container"]}>
                <div className={classes.title}>
                  <p>Border countries: </p>
                </div>
                <div className={classes.borders}>
                  {country.borders?.map((border) => (
                    <div key={border} className={classes.border}>
                      {border}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default country;
