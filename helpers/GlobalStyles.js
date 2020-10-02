import { createGlobalStyle } from "styled-components";

export const globalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }
  body {
  padding: 0;
  margin: 0;
  background:  ${({ theme }) => theme.colors.background};
  overflow: hidden;
}
  
`;

export default globalStyles;
