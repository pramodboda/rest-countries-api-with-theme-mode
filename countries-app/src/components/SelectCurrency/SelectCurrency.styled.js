import styled from "styled-components";

const CustomSelectContainer = styled.div`
  position: relative;

  .select-selected {
    background-color: ${({ theme }) => theme.colors.btnBg};
    color: ${({ theme }) => theme.colors.btnTxt};
  }

  .select-selected:hover {
    background-color: ${({ theme }) => theme.colors.btnBgHover};
    color: ${({ theme }) => theme.colors.btnTxt};
  }

  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  .select-items div,
  .select-selected {
    padding: 8px 8px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }

  .select-items {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .select-hide {
    display: none;
  }

  .select-items div:hover,
  .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export { CustomSelectContainer };
