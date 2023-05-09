import { Link } from "react-router-dom";

import styled from "styled-components";

export const NavLink = styled(Link)`
display: inline-flex;
justify-content: center;
  color: ${({ theme }) => theme.colors.defaultLinkText}};
  text-decoration: none;
  padding: 8px 6px;
  &:hover{
      background ${({ theme }) => theme.colors.defaultLinkHoverBg}
  }
`;
