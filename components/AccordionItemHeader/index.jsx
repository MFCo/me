import React from "react";
import PropTypes from "prop-types";

import Avatar from "./assets/Avatar";
import HeaderLayout from "./assets/HeaderLayout";

import TitlesLayout from "./assets/TitlesLayout";
import TechLayout from "./assets/TechLayout";

import RightIcon from "./assets/RightIcon";
import ProjectName from "./assets/ProjectName";
import ProjectType from "./assets/ProjectType";

const CollapsibleListItem = ({ type, name, tech = [], isOpen }) => {
  return (
    <HeaderLayout layout>
      <TitlesLayout layout>
        <span>
          <ProjectName layout>{name}</ProjectName>
          <ProjectType layout>{type}</ProjectType>
        </span>
        <TechLayout layout mobileHide>
          {tech.map((e) => (
            <Avatar key={`${e}out`} logo={`/logos/${e}`} light />
          ))}
        </TechLayout>
        <RightIcon>{isOpen ? "-" : "+"}</RightIcon>
      </TitlesLayout>
    </HeaderLayout>
  );
};

CollapsibleListItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  tech: PropTypes.array,
  isOpen: PropTypes.bool,
};

export default CollapsibleListItem;
