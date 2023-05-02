import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

import { SearchInput } from "../../components/SearchInput/SearchInput";
import { CountryCard } from "../../components/CountryCard/CountryCard";

const AllContries = () => {
  const {
    isLoading,
    getAllCountriesData,
    allContriesData,
    filteredCountriesData,
  } = useAppContext();

  useEffect(() => {
    getAllCountriesData();
  }, []);

  return (
    <>
      <SearchInput />
      {isLoading && "Loading........"}
      {allContriesData &&
        filteredCountriesData.map((country, idx) => (
          <CountryCard
            flag={country.flag}
            name={country.name}
            currency={country.currency}
            dialCode={country.dialCode}
            key={idx}
          />
        ))}
    </>
  );
};

export default AllContries;
