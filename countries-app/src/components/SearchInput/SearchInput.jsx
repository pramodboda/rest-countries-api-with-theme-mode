import { useAppContext } from "../../context/AppContext";

import { SearchInputContainer } from "./SearchInput.styled";
const SearchInput = () => {
  const { search, setSearch } = useAppContext();

  const searchHandler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <>
      <SearchInputContainer>
        <input
          onChange={searchHandler}
          value={search}
          placeholder="Search for country"
        />
      </SearchInputContainer>
    </>
  );
};

export default SearchInput;
