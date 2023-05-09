import styled from "styled-components";

const Container = styled.div`
  // border: 1px solid red;
  display: block;
`;

const MainContainer = styled.div`
  display: block;
  width: 100%;
  padding: 25px 0;
`;

const AllCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justifiy-content: center;
  gap: 15px 15px;
  // padding: 0 15px;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  // grid-gap: 20px;

  // width: 1000px;
  // margin: 0 auto;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export { Container, MainContainer, AllCountriesContainer };
