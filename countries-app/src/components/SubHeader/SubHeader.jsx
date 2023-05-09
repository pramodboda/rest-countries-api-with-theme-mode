import { SubHeaderBlock, SubHeaderWrapper } from "./SubHeader.styled";
import SearchInput from "../SearchInput/SearchInput";
import SelectCurrency from "../SelectCurrency/SelectCurrency";

const SubHeader = () => {
  return (
    <SubHeaderBlock>
      <div className="inner-wrapper">
        <SubHeaderWrapper>
          <SearchInput />
          <SelectCurrency />
        </SubHeaderWrapper>
      </div>
    </SubHeaderBlock>
  );
};

export default SubHeader;
