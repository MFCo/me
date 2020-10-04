import React from "react";
import PropTypes from "prop-types";

import Section from "./assets/Section";

const SectionTemplate = ({ color, id, children }) => (
  <Section id={id} color={color}>
    {children}
  </Section>
);

SectionTemplate.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.any,
};

export default SectionTemplate;
