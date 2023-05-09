import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  padding: 10px 8px;
  border: none;
  color: ${({ theme }) => theme.colors.btnTxt};
  transition: 0.1s ease-in-out all;
  background: ${({ theme }) => theme.colors.btnBg};
  cursor: pointer;
  font-weight: bold;

  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.btnBgHover};
  }
`;

export { ButtonContainer };
