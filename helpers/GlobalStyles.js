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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
  
`;

export default globalStyles;
