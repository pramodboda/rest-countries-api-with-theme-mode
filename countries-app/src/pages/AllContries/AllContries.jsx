import { useState, useEffect } from "react";
import { contriesApiURL } from "../../utils/api";

import NotFound from "../NotFound/NotFound";
import axios from "axios";

const AllCountries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const [errorMsg, setErrorMsg] = useState("");

  const getAllCountries = async () => {
    try {
      const controller = new AbortController();
      //   const response = await axios.get("contriesApiURL");
      const response = await axios.get(contriesApiURL);
      console.log(response.data.data);
      setAllCountries(response.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErrorMsg(`Not able to show the data,  ${err.message}`);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <>
      Country
      {isLoading && !errorMsg && <h4>Loading</h4>}
      {errorMsg && !isLoading && <NotFound errorMsg={errorMsg} />}
    </>
  );
};

export default AllCountries;
