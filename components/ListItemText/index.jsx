import React from "react";
import PropTypes from "prop-types";

import Text from "./assets/Text";
import Underline from "./assets/Underline";

const ListItemText = ({ title, color, selected, onClick }) => (
  <Text animate color={color} selected={selected} onClick={onClick}>
    {title}
    {selected && <Underline layoutId="underline" color={color} />}
  </Text>
);

ListItemText.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ListItemText;
