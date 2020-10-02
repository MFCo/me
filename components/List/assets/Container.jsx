import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.unit * 3}px 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default Container;
