import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import theme from "../theme";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
