import styled from "styled-components";

const CountryCardContainer = styled.div`
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  width: 23.2%;
  background-color: ${({ theme }) => theme.colors.cardBg};

  a {
    text-decoration: none;
  }

  .country-card-flag-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .country-card-broken-image {
    width: 100%;

    padding: 25px 50px 0 50px;
    opacity: 0.5;
  }

  .image-broken-text {
    font-size: 10px;
    padding: 0 15px 15px 15px;
    // border: 1px solid red;
    color: ${({ theme }) => theme.colors.errorTxt};
  }

  .country-card-content {
    padding: 15px;
  }

  @media only screen and (max-width: 1000px) {
    width: calc(33% - 8px);
  }
  @media only screen and (max-width: 540px) {
    width: calc(33% - 9px);
  }
  @media only screen and (max-width: 500px) {
    width: calc(50% - 9px);
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
  }
`;

export { CountryCardContainer };
