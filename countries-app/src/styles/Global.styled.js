import { createGlobalStyle } from "styled-components";

import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: Inter, sans-serif;
  overflow-x: hidden;
}

a { color: ${({ theme }) => theme.colors.text};}

.inner-wrapper{
  // border: 1px solid red;
  width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
}

.gap{
  padding: 25px 0;
}

.center{
  text-align:center;
}



@media only screen and (max-width:980px){
  .inner-wrapper{
    width: 100%
  }
}

`;
