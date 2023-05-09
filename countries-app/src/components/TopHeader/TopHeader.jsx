import { useAppContext } from "../../context/AppContext";

import { TopHeaderBlock, TopHeaderWrapper } from "./TopHeader.styled";
import Button from "../Button/Button";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const TopHeader = () => {
  const { theme, handleThemeChange } = useAppContext();

  return (
    <TopHeaderBlock>
      <div className="inner-wrapper">
        <TopHeaderWrapper>
          <h2>Where in the world?</h2>
          {/* <button onClick={handleThemeChange}></button> */}
          <Button onClickHandler={handleThemeChange}>
            {theme === "light" ? (
              <DarkModeOutlinedIcon style={{ fontSize: "16px" }} />
            ) : (
              <WbSunnyOutlinedIcon style={{ fontSize: "16px" }} />
            )}
            <span>&nbsp;{theme === "light" ? "Dark " : "Light "}</span>{" "}
            <span>&nbsp;Mode</span>
          </Button>
        </TopHeaderWrapper>
      </div>
    </TopHeaderBlock>
  );
};

export default TopHeader;
