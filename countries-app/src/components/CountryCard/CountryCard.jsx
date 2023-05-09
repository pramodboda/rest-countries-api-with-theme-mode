import { Link } from "react-router-dom";
import { CountryCardContainer } from "./CountryCard.styled";

export const CountryCard = ({ flag, name, currency, dialCode }) => {
  return (
    <>
      <CountryCardContainer>
        <Link to={`/country/${name}`}>
          <div>
            <div className="country-card-flag">
              {flag ? (
                <img src={flag} className="country-card-flag-image" />
              ) : (
                <>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/basic-2-black-series/64/a-92-512.png"
                    className="country-card-broken-image"
                  />
                  <p className="image-broken-text center">
                    "Country flag image not available"
                  </p>
                </>
              )}
            </div>

            <div className="country-card-content">
              <p className="country-card-title">{name}</p>
              <p className="country-card-currency">currency: {currency}</p>
              <p className="country-card-dialcode">dialCode: {dialCode}</p>
            </div>
          </div>
        </Link>
      </CountryCardContainer>
    </>
  );
};
