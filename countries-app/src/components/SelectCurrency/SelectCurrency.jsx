import { useAppContext } from "../../context/AppContext";
import { CustomSelectContainer } from "./SelectCurrency.styled";

const SelectCurrency = () => {
  const { search, setSearch } = useAppContext();

  const selectCurrencyHandler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <CustomSelectContainer>
      <select
        className="select-selected"
        onChange={selectCurrencyHandler}
        defaultValue={""}
      >
        <option value="" disabled>
          Fliter by Currency:
        </option>
        <option value="India">INR</option>
        <option value="United States">USD</option>
        <option value="China">CNY</option>
        <option value="Japan">JPY</option>
        <option value="Switzerland">CHF</option>
      </select>
    </CustomSelectContainer>
  );
};

export default SelectCurrency;
