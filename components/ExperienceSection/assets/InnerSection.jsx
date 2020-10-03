import styled from "styled-components";

const InnerSection = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: ${({ theme }) => theme.maxWidth / 2}px;
  flex-wrap: wrap;
  height: 100%;
  margin-top: ${({ theme }) => theme.unit * 3}px;
  align-items: flex-start;
`;

export default InnerSection;
