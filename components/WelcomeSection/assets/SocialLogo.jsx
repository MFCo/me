import styled from "styled-components";

const SocialLogo = styled.a`
  background-color: transparent;
  min-width: ${({ theme }) => theme.unit * 4}px;
  min-height: ${({ theme }) => theme.unit * 4}px;
  max-width: ${({ theme }) => theme.unit * 4}px;
  max-height: ${({ theme }) => theme.unit * 4}px;
  margin-bottom: ${({ theme }) => theme.unit}px;
  ${({ logo }) =>
    logo &&
    `
    background-image: url("${logo}");
    background-position: center; 
    background-size: cover;
    background-repeat: no-repeat;
    
    `}

@media only screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  margin-bottom: ${({ theme }) => theme.unit * 2}px;

  }
`;

export default SocialLogo;
