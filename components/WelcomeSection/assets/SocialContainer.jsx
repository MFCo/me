import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${({ theme }) => theme.unit}px;
  right: ${({ theme }) => theme.unit}px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
  }
`;

export default SocialContainer;
