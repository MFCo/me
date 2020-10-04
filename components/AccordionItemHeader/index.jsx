import React from "react";
import PropTypes from "prop-types";

import Avatar from "./assets/Avatar";
import HeaderLayout from "./assets/HeaderLayout";

import TitlesLayout from "./assets/TitlesLayout";
import TechLayout from "./assets/TechLayout";

import RightIcon from "./assets/RightIcon";
import ProjectName from "./assets/ProjectName";
import ProjectType from "./assets/ProjectType";

const AccordionItemHeader = ({ type, name, brief, tech = [], isOpen }) => (
  <HeaderLayout layout>
    <TitlesLayout layout>
      <span>
        <ProjectName layout>{name}</ProjectName>
        <ProjectType layout>{brief}</ProjectType>
        <i>{type}</i>
      </span>
      <TechLayout layout mobileHide>
        {tech.map(e => (
          <Avatar key={`${e}out`} logo={`/logos/${e}`} light />
        ))}
      </TechLayout>
      <RightIcon>{isOpen ? "-" : "+"}</RightIcon>
    </TitlesLayout>
  </HeaderLayout>
);

AccordionItemHeader.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  brief: PropTypes.string,
  tech: PropTypes.array,
  isOpen: PropTypes.bool,
};

export default AccordionItemHeader;
