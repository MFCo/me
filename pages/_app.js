import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../helpers/GlobalStyles";
import { theme } from "../theme";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
