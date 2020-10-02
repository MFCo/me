import styled from "styled-components";

const Mail = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0;
  text-decoration: none;
`;

export default Mail;
