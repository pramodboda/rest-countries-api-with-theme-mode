const NotFound = ({ imgURL, errorMsg }) => {
  return (
    <>
      <div>
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1682975231~exp=1682975831~hmac=ac50f0376b9bbbae7c44d07004dadb26ca7a1177e8f49b79ad6295a33660a94f"
          alt="Not Found"
        />
        <h4>{errorMsg}</h4>
      </div>
    </>
  );
};

export default NotFound;
