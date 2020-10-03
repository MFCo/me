import React from "react";
import { AnimateSharedLayout } from "framer-motion";

import CollapsibleList from "../CollapsibleList";

import { theme } from "../../theme";
import Section from "./assets/Section";

const Home = () => (
  <Section id="experience" color={theme.colors.red}>
    <AnimateSharedLayout>
      <CollapsibleList
        title="Engineering"
        items={[
          {
            company: "Medbelle",
            title: "Frontend Engineer",
            period: { start: "Jun 2018", end: "Nov 2019" },
            logo: "/logos/mb.png",
            content: `Developed the company web application using React..js; NextJS was chosen as SSR framework. Connected with backend using Apollo (graphQL). Product advisor in UX/UI related issues. Bridge between Product and Engineering team. Managed key features.
            The company is a startup company, 30-50 employees.`,
          },
          {
            company: "StartupBoost",
            title: "Full-stack Engineer",
            period: { start: "Mar 2018", end: "May 2019" },
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
            period: { start: "Nov 2019", end: null },
            logo: "/logos/mb.png",
            content: `Responsible for guiding the success of the internal products and processes, and leading the cross-functional team that is responsible for improving them. Set the strategy, roadmap, and feature definition for the internal products. This involves bridging gaps between different functions within the company and aligning all of the teams involved.
            The company is a startup company, 30-50 employees.`,
          },
        ]}
      />
    </AnimateSharedLayout>
  </Section>
);

export default Home;
