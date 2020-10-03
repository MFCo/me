import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: ${({ theme }) => theme.unit * 20}px 0;
  align-items: flex-start;
  background-color: ${({ color }) => `${color}CC`};
`;

export default Section;
