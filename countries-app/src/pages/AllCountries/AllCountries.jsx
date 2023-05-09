import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import {
  Container,
  MainContainer,
  AllCountriesContainer,
} from "./AllCountries.styled";

import Header from "../../components/Header/Header";
import { CountryCard } from "../../components/CountryCard/CountryCard";

const AllCountries = () => {
  const {
    isLoading,
    getAllCountriesData,
    allCountriesData,
    filteredCountriesData,
  } = useAppContext();

  useEffect(() => {
    getAllCountriesData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <div className="inner-wrapper">
            {isLoading && <LoadingSpinner />}
            <AllCountriesContainer>
              {allCountriesData &&
                filteredCountriesData.map((country, idx) => (
                  <CountryCard
                    flag={country.flag}
                    name={country.name}
                    currency={country.currency}
                    dialCode={country.dialCode}
                    key={idx}
                  />
                ))}
            </AllCountriesContainer>
          </div>
        </MainContainer>
      </Container>
    </>
  );
};

export default AllCountries;
