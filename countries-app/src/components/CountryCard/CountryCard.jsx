export const CountryCard = ({ flag, name, currency, dialCode }) => {
  return (
    <>
      <div>
        <img src={flag} />
        <div>
          <p>{name}</p>
          <p>currency: {currency}</p>
          <p>dialCode: {dialCode}</p>
        </div>
      </div>
    </>
  );
};
