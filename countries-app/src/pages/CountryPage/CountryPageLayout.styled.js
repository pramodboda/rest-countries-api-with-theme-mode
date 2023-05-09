import styled from "styled-components";

const CountryPageWrapper = styled.div`
  display: flex;
`;

const CountryPageLeft = styled.div`
  width: 60%;
  padding: 0 15px 0 0;

  .country-flag img {
    width: 100%;
  }
`;

const CountryPageRight = styled.div`
  width: 40%;
  padding: 0 0 0 15px;
`;

export { CountryPageWrapper, CountryPageLeft, CountryPageRight };
