import { useAppContext } from "../../context/AppContext";

export const SearchInput = () => {
  const { searchByInpVal, setSearchByInpVal } = useAppContext();

  const searchHandler = (e) => {
    console.log(e.target.value);
    setSearchByInpVal(e.target.value);
  };
  return (
    <>
      <input onChange={searchHandler} value={searchByInpVal}  />
    </>
  );
};
