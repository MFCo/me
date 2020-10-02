import React from "react";
import PropTypes from "prop-types";

import Mail from "./assets/Mail";

const MainMail = ({ mail }) => <Mail href={`mailto:${mail}`}>{mail}</Mail>;

MainMail.propTypes = {
  mail: PropTypes.string,
};

export default MainMail;
