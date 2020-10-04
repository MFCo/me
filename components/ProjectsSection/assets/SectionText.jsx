import styled from "styled-components";

const SectionText = styled.p`
  font-size: 1.6rem;
  text-align: left;
  max-width: ${({ theme }) => theme.maxWidth / 2}px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  margin-top: ${({ theme }) => theme.unit * 2}px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin: 0 ${({ theme }) => theme.unit * 2}px
      ${({ theme }) => theme.unit * 3}px ${({ theme }) => theme.unit * 2}px;
  }
`;

export default SectionText;
