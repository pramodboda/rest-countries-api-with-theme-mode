import styled from "styled-components";

const TopHeaderBlock = styled.div`
  // border: 1px solid red;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TopHeaderWrapper = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  // flex: 1;
  padding: 15px 0;
`;

export { TopHeaderBlock, TopHeaderWrapper };
