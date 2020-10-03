import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.grey[600]};
  max-width: 110%;
  text-align: center;
  margin: 0;
`;

export default SectionTitle;
