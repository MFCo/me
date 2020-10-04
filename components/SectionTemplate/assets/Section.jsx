import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: ${({ theme }) => theme.unit * 4}px 0;
  background-color: ${({ color }) => color};
`;

export default Section;
