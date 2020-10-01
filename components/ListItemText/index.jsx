import React from "react";
import PropTypes from "prop-types";

import Text from "./assets/Text";

const ListItemText = ({ title, color }) => <Text color={color}>{title}</Text>;

ListItemText.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default ListItemText;
