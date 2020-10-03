import styled from "styled-components";

const AboveTheFold = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  position: relative;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    padding-bottom: ${({ theme }) => theme.unit * 16}px;
  }
`;

export default AboveTheFold;
