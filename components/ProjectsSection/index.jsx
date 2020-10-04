import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";

import { theme } from "../../theme";
import Section from "../SectionTemplate";
import InnerSection from "./assets/InnerSection";
import SectionTitle from "./assets/SectionTitle";
import SectionText from "./assets/SectionText";
import Underline from "./assets/Underline";
import Accordion from "../Accordion";
import AccordionContainer from "./assets/AccordionContainer";

const projects = [
  {
    id: 0,
    name: "Babel-plugin-CSS-generator-react-components",
    type: "Personal Project",
    brief:
      "CSS-in-JS solution, allows to define custom tags and attach styles to them",
    tech: ["js.png", "babel.jpg"],
  },
  {
    id: 1,
    name: "JSFObA",
    type: "Personal Project",
    brief: "JavaScript dead code analyzer",
    tech: ["node.png", "esprima.png"],
  },
  {
    id: 2,
    name: "DPSolver",
    type: "Student Project",
    brief: "Interactive tool to apply the Davis-Putnam algorithm",
    tech: ["java.png", "gwt.png"],
  },
  {
    id: 3,
    name: "Simple language compiler",
    type: "Student Project",
    brief: "Simple imperative and procedural language compiler",
    tech: ["java.png"],
  },
  {
    id: 4,
    name: "Subset Sum Game",
    type: "Student Project",
    brief:
      "Implementation of multiple algorithms to solve the knapsack problem",
    tech: ["c++.png", "cocos.jpeg"],
  },
];

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Section id="projects" color={theme.colors.background}>
      <span>
        <SectionTitle>PERSONAL PROJECTS</SectionTitle>
        <Underline color={theme.colors.red} />
      </span>
      <SectionText>
        Across the years, I&apos;ve done a couple of personal projects, some of
        them framed as student projects as they were developed while in College
        to establish knowledge and take into practice some theoric concepts.
      </SectionText>
      <SectionText>
        Other projects have been developed as pet projects while trying to get a
        better understanding over certain technologies, as you will appreciate I
        have a clear inclination to programming languages and how do they work
        under the hood.
      </SectionText>
      <InnerSection>
        <AnimateSharedLayout>
          <AccordionContainer>
            {projects.map((e) => (
              <Accordion
                key={`${e.id}`}
                item={e}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </AccordionContainer>
        </AnimateSharedLayout>
      </InnerSection>
    </Section>
  );
};

export default ProjectsSection;
