import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

import CountryPageLayout from "./CountryPageLayout";
import { NavLink } from "./CountryPage.styled";
import TopHeader from "../../components/TopHeader/TopHeader";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const CountryPage = () => {
  const { name } = useParams();
  // const { currency } = useParams();
  const { allCountriesData } = useAppContext();

  const [currencyCode, setCurrencyCode] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [flag, setFlag] = useState("");
  const [cName, setCName] = useState("");

  useEffect(() => {
    if (name) {
      getCountry(name);
    }
  }, []);
  const getCountry = async (param) => {
    // console.log(allCountriesData);
    const lowerSearch = param.toLowerCase();
    const cData = await allCountriesData.filter((country) =>
      country.name.toLowerCase().includes(lowerSearch)
    );

    // Main problem is here -> cData
    // console.log("cData:", cData);

    await setCurrencyCode(cData[0].currency);
    await setDialCode(cData[0].dialCode);
    await setFlag(cData[0].flag);
    await setCName(cData[0].name);
  };

  return (
    <>
      <TopHeader />
      <div class="inner-wrapper">
        <div className="gap">
          <NavLink to="/" className="link-btn">
            <span>
              <HomeOutlinedIcon style={{ fontSize: "18px" }} />{" "}
            </span>{" "}
            Home
          </NavLink>
        </div>
        {cName && (
          <CountryPageLayout
            name={cName}
            flag={flag}
            currency={currencyCode}
            dialcode={dialCode}
          />
        )}
      </div>
    </>
  );
};
export default CountryPage;
