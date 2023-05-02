const CountryPageLayout = ({ name, flag }) => {
  return (
    <>
      <div>
        <div>
          <img src={flag} alt={name} />
        </div>
        <div>
          <h1>{name}</h1>
        </div>
      </div>
    </>
  );
};

export default CountryPageLayout;
