import { ButtonContainer } from "./Button.styled";

const Button = ({ onClickHandler, children }) => {
  return <ButtonContainer onClick={onClickHandler}>{children}</ButtonContainer>;
};
export default Button;
