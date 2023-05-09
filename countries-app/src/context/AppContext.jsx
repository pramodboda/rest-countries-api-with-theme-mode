import { useState, createContext, useContext } from "react";
import { countriesApiURL } from "../api/api";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global.styled";
import { lightTheme, darkTheme } from "../styles/Theme.styled";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [selectedTheme, setSelectedTheme] = useState(lightTheme);
  const [isLoading, setIsLoading] = useState(true);
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [search, setSearch] = useState("");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      setSelectedTheme(darkTheme);
    } else {
      setTheme("light");
      setSelectedTheme(lightTheme);
    }

    // console.log(selectedTheme);
  };

  const getAllCountriesData = async () => {
    try {
      const response = await axios.get(countriesApiURL);
      console.log(response.data.data);
      setAllCountriesData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const lowerSearch = search.toLowerCase();

  let filteredCountriesData = allCountriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(lowerSearch) ||
      country.dialCode === search
  );

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <AppContext.Provider
        value={{
          isLoading,
          getAllCountriesData,
          allCountriesData,
          search,
          setSearch,
          filteredCountriesData,
          theme,
          handleThemeChange,
        }}
      >
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
};

// Custom hook - make sure use
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
