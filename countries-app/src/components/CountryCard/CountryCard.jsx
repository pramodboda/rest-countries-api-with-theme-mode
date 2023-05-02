import { Link } from "react-router-dom";

export const CountryCard = ({ flag, name, currency, dialCode }) => {
  return (
    <>
      <Link to={`/country/${name}`}>
        <div>
          <img src={flag} />
          <div>
            <p>{name}</p>
            <p>currency: {currency}</p>
            <p>dialCode: {dialCode}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
