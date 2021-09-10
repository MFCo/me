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
    name: "Miricyl Learning Tool",
    type: "Volunteer Project",
    brief:
      "Guide with curated information for people with mental health issues",
    content: `Allows users with mental health issues to navigate curated information related to their conditions. Prompts the user to find an answer on why are they feeling unwell to take further steps and create recipes to be reused in the future. This project was performed within the context of CodeYourFuture, served the Product Manager’s role, and mentored the students who developed the application.
    `,
    tech: [],
  },
  {
    id: 1,
    name: "Babel-plugin-CSS-generator-react-components",
    type: "Personal Project",
    brief:
      "CSS-in-JS solution, allows to define custom tags and attach styles to them",
    content: `Allows the user to define custom tags with associated styles like styled-components without explicit class names references to CSS files, the user doesn't need to create CSS files with styles, styles are contained inside each component definition.
Generates the CSS files in case the user wants to implement any post-processing method.
Supports nested styles definitions, and stateless React components as the target.
This project was developed as a PoC to understand systems like styled-components complexity.`,
    tech: ["js.png", "babel.jpg"],
  },
  {
    id: 2,
    name: "JSFObA",
    type: "Personal Project",
    brief: "JavaScript dead code analyzer",
    content: `Developed the backend in NodeJS and frontend in Java using JavaFX.
    Generates the abstract syntax tree from a given JS file using Esprima, then instruments that code adding callbacks to detect function's declaration and subsequent invocation.
    Print a graph that shows the relationship between functions, and also shows which functions and objects methods are never called to detect dead code.
    `,
    tech: ["node.png", "esprima.png", "java.png"],
  },
  {
    id: 3,
    name: "DPSolver",
    type: "Student Project",
    brief: "Interactive tool to apply the Davis-Putnam algorithm",
    content: `Developed using GoogleWebToolkit.
    It's currently being used at Universidad Nacional del Centro de la Provincia de Buenos Aires to teach students how the Davis-Putnam algorithm works.
    Solves propositional logic formulas step by step, allowing the user to customize every parameter and execution order.
    Byacc is used to parse logic formulas.
    Published in 2° National Congress of Computer Science and Information Systems, Argentina.
    `,
    tech: ["java.png", "gwt.png"],
  },
  {
    id: 4,
    name: "Simple Language Compiler",
    type: "Student Project",
    brief: "Simple imperative and procedural language compiler",
    content: `Developed in Java, using JavaFX for the UI.
    Simple language created just for this excersise, most remarkable structures are anonym functions and iteration through for-statements.
    Classic warning and error handling.
    Custom IDE allows user to write code, import files, and visualize compilation log.
    Yacc used to parse input code. Output is an executable and the binary file.`,
    tech: ["java.png"],
  },
  {
    id: 5,
    name: "Subset Sum Game",
    type: "Student Project",
    brief:
      "Implementation of multiple algorithms to solve the knapsack problem",
    content: `Developed in C++, using Cocos2D for the UI.
    Implementation of multiple heuristic algorithms to solve knapsack problem.
    Goal is to make them compete to evaluate efficency of each of them when they play each other with a common pool of objects and same knapsack size, player who collects in the most efficient way win.`,
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
            {projects.map(e => (
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
