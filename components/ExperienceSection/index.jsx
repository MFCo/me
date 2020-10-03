import React from "react";
import { AnimateSharedLayout } from "framer-motion";

import CollapsibleList from "../CollapsibleList";

import { theme } from "../../theme";
import Section from "./assets/Section";
import InnerSection from "./assets/InnerSection";
import SectionTitle from "./assets/SectionTitle";
import SectionText from "./assets/SectionText";
import Underline from "./assets/Underline";

const ExperienceSection = () => (
  <Section id="experience" color={theme.colors.grey[100]}>
    <span>
      <SectionTitle>MY CAREER PATH</SectionTitle>
      <Underline color={theme.colors.yellow} />
    </span>
    <SectionText>
      To start with, I think I should give some background info about myself. I
      finished my master in Systems Engineering back in Argentina, during my
      time at college I was focused on software performance and programming
      languages, I was even applying to start a PhD and continue in the academic
      world.
    </SectionText>
    <SectionText>
      After doing some mandatory internships to get my degree I found myself
      really self-involved with Frontend Development and mostly curious about
      <i>{" why "}</i>
      were we building stuff. This leads me to pursue a career as a Frontend
      Engineer, but after a couple of years I realized I wanted to be even more
      involved in
      <i>{" what to build, and why to build it, "}</i>
      so I ended up transitioning to full-time Product Manager.
    </SectionText>
    <SectionText>
      Nowadays, I&apos;m getting closer to coding again after almost a year
      dedicating most of my time to Product Management and relegating coding to
      a place were I was just keeping myself up to date with main trends and
      frameworks releases.
    </SectionText>
    <SectionText>
      Currently my main coding goal is to build enjoyable User Experiences and
      supporting it with Framer Motion. I truly believe in the
      <i> Product Engineer </i>
      as a role that will emerge soon, Engineers who get really involved in
      really understanding the problem space and empathizing with the users.
    </SectionText>
    <InnerSection>
      <AnimateSharedLayout>
        <CollapsibleList
          title="Engineering"
          items={[
            {
              company: "Medbelle",
              title: "Frontend Engineer",
              period: { start: "Jun 2018", end: "Nov 2019" },
              logo: "/logos/mb.png",
              tech: ["react.png", "graphql.png", "nextjs-logo.jpg"],
              content: `Developed the company web application using React; NextJS was chosen as SSR framework.
            Connected with backend using Apollo (graphQL). Product advisor in UX/UI related issues. Bridge between Product and Engineering team. Managed key features.`,
            },
            {
              company: "StartupBoost",
              title: "Full-stack Engineer",
              period: { start: "Mar 2018", end: "May 2019" },
              logo: "/logos/sboost.png",
              tech: [
                "react.png",
                "nextjs-logo.jpg",
                "redux.png",
                "node.png",
                "loopback.png",
              ],
              content: `Developed the company website using React; NextJS was chosen as SSR framework. Designed and implemented the website infrastructure, it's deployed in AWS.
            Developed Medo, a Patient Management Software, implemented the client-side web application by using React.js alongside Facebook’s Flux data model; the backend is API REST-based using Loopback.
            `,
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
              content: `Responsible for guiding the success of the internal products and processes, and leading the cross-functional team that is responsible for improving them. Set the strategy, roadmap, and feature definition for the internal products. 
            This involves bridging gaps between different functions within the company and aligning all of the teams involved.`,
            },
          ]}
        />
      </AnimateSharedLayout>
    </InnerSection>
  </Section>
);

export default ExperienceSection;
