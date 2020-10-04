import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.grey[600]};
  max-width: 110%;
  text-align: center;
  margin: 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    font-size: 2.4rem;
    margin: 0 ${({ theme }) => theme.unit * 2}px 0
      ${({ theme }) => theme.unit * 2}px;
  }
`;

export default SectionTitle;
