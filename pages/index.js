import React from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

import CollapsibleList from "../components/CollapsibleList";
import List from "../components/List";
import Mail from "../components/MainMail";

import { theme } from "../theme";

const AboveTheFold = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;
  padding: ${({ theme }) => theme.unit * 20}px 0;
  align-items: flex-start;
  background-color: ${({ color }) => color};
`;

const Home = () => (
  <>
    <AboveTheFold>
      <List
        items={[
          { text: "Let's", color: theme.colors.red },
          { text: "build", color: theme.colors.blue },
          { text: "something", color: theme.colors.green },
          { text: "meaningful", color: theme.colors.yellow },
        ]}
      />
      <Mail mail="marianococirio@gmail.com" />
    </AboveTheFold>
    <Section color={theme.colors.red}>
      <AnimateSharedLayout>
        <CollapsibleList
          title="Engineering"
          items={[
            {
              company: "Medbelle",
              title: "Frontend Engineer",
              logo: "/logos/mb.png",
              content: `Developed the company web application using React..js; NextJS was chosen as SSR framework. Connected with backend using Apollo (graphQL). Product advisor in UX/UI related issues. Bridge between Product and Engineering team. Managed key features.
            The company is a startup company, 30-50 employees.`,
            },
            {
              company: "StartupBoost",
              title: "Full-stack Engineer",
              logo: "/logos/sboost.png",
              content: `Developed the company website using React..js; NextJS was chosen as SSR framework. Designed and implemented the website infrastructure, it's deployed in AWS.
            Developed Medo, a Patient Management Software, implemented the client-side web application by using React.js alongside Facebook’s Flux data model; the backend is API REST-based using Loopback.
            Heavily used npm and yarn famous JavaScript modules and learned about many Web Development good practices.
            The company is a startup company, 3-10 employees.`,
            },
          ]}
        />
        <CollapsibleList
          title="Product"
          items={[
            {
              company: "Medbelle",
              title: "Product Manager",
              logo: "/logos/mb.png",
              content: `Responsible for guiding the success of the internal products and processes, and leading the cross-functional team that is responsible for improving them. Set the strategy, roadmap, and feature definition for the internal products. This involves bridging gaps between different functions within the company and aligning all of the teams involved.
            The company is a startup company, 30-50 employees.`,
            },
          ]}
        />
      </AnimateSharedLayout>
    </Section>
  </>
);

export default Home;
