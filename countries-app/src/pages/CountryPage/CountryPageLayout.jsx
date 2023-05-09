import {
  CountryPageWrapper,
  CountryPageLeft,
  CountryPageRight,
} from "./CountryPageLayout.styled";

const CountryPageLayout = ({ name, flag, currency, dialcode }) => {
  return (
    <>
      <CountryPageWrapper>
        <CountryPageLeft>
          <div className="country-flag">
            <img src={flag} alt={name} />
          </div>
        </CountryPageLeft>
        <CountryPageRight>
          <h1>{name}</h1>
          <p>
            <strong>Currency:</strong> {currency}
          </p>
          <p>
            <strong>Dial Code:</strong> {dialcode}
          </p>
        </CountryPageRight>
      </CountryPageWrapper>
    </>
  );
};

export default CountryPageLayout;
