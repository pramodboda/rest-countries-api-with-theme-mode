import { useState, createContext, useContext } from "react";
import { countriesApiURL } from "../api/api";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allContriesData, setAllContriesData] = useState([]);
  const [searchByInpVal, setSearchByInpVal] = useState("");

  const getAllCountriesData = async () => {
    try {
      const response = await axios.get(countriesApiURL);
      console.log(response.data.data);
      setAllContriesData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const lowerSearch = searchByInpVal.toLowerCase();
  const filteredCountriesData = allContriesData.filter((country) =>
    country.name.toLowerCase().includes(lowerSearch)
  );

  return (
    <AppContext.Provider
      value={{
        isLoading,
        getAllCountriesData,
        allContriesData,
        searchByInpVal,
        setSearchByInpVal,
        filteredCountriesData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook - make sure use
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
