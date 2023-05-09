import styled from "styled-components";

const SearchInputContainer = styled.div`
  input {
    padding: 8px 6px;

    border: 1px solid ${({ theme }) => theme.colors.inputBor};
    background: ${({ theme }) => theme.colors.inputBg};
    color: ${({ theme }) => theme.colors.inputText};
  }
`;

export { SearchInputContainer };
