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
        <option value="">Choose by currency</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="KYD">KYD</option>
        <option value="GIP">GIP</option>
        <option value="GBP">GBP</option>
        <option value="JOD">JOD</option>
        <option value="OMR">OMR</option>
        <option value="BHD">BHD</option>
      </select>
    </CustomSelectContainer>
  );
};

export default SelectCurrency;
