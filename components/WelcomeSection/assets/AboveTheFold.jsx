import styled from "styled-components";

const AboveTheFold = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  position: relative;
  padding-bottom: ${({ theme }) => theme.unit * 8}px;
`;

export default AboveTheFold;
