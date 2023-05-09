import styled from "styled-components";

const HeaderContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.headerBg};
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
`;

export { HeaderContainer };
