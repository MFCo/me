import React from "react";
import { AnimateSharedLayout } from "framer-motion";

import CollapsibleList from "../CollapsibleList";

import { theme } from "../../theme";
import Section from "../SectionTemplate";
import InnerSection from "./assets/InnerSection";
import SectionTitle from "./assets/SectionTitle";
import SectionText from "./assets/SectionText";
import Underline from "./assets/Underline";

const ExperienceSection = () => (
  <Section id="experience" color={theme.colors.grey[100]}>
    <span>
      <SectionTitle>MY CAREER PATH</SectionTitle>
      <Underline color={theme.colors.green} />
    </span>
    <SectionText>
      To start with, I think I should give you some background info about
      myself. In 2018, I finished my master in Systems Engineering in Argentina.
      During my time at college I was focused on software performance and
      programming languages, I was even applying to start a PhD and continue in
      the academic world.
    </SectionText>
    <SectionText>
      After doing some mandatory internships to get my degree I found myself
      really self-involved with Frontend Development and mostly curious about
      <i>{" why "}</i>
      do we build stuff. This leads me to pursue a career as a Frontend
      Engineer, but after a couple of years I realized I wanted to be even more
      involved in
      <i>{" what to build, and why to build it, "}</i>
      so I ended up transitioning into full-time Product Manager.
    </SectionText>
    <SectionText>
      Currently, my main goal is to build enjoyable and valuable Products.
      Sometimes I find myself missing the technical part, that is why I keep
      this website alive, using it as a playground to test new libraries and
      frameworks. I truly believe in the
      <i> Product Engineer </i>
      as a role that will emerge soon, Engineers who get really involved in
      really understanding the problem space and empathizing with the users.
    </SectionText>
    <InnerSection>
      <AnimateSharedLayout>
        <CollapsibleList
          title="Product"
          items={[
            {
              company: "Medbelle",
              title: "Product Manager",
              period: { start: "Nov 2019", end: null },
              logo: "/logos/mb.png",
              content: `Responsible for guiding the success of the B2B and Cosmetic Products leading the cross-functional team
              that is responsible for improving them. Set the strategy, roadmap, and product definition. This involves
              bridging gaps between different functions within the company and external stakeholders as Hospitals
              and Surgeons. Moving the working model into a data-driven decision-making working model. Running
              tests and analyzing data to prioritize major impact problems to tackle. Aligning all of the teams involved.`,
            },
            {
              company: "CodeYourFuture",
              title: "Product Manager",
              period: { start: "Jul 2021", end: null },
              logo: "/logos/cyf.jpeg",
              content: `CodeYourFuture (CYF) is a UK based non-profit organisation that trains some of the most deprived
              members of society to become web developers and helps them to find work in the tech industry.
              Volunteer as Product Manager for the final projects. The final projects are developed by students, they
              develop a solution for a problem brought by another non-profit organization. The solution is developed
              within 4 weeks and it needs to be production ready.`,
            },
          ]}
        />
        <CollapsibleList
          title="Engineering"
          items={[
            {
              company: "Medbelle",
              title: "Frontend Engineer",
              period: { start: "Jun 2018", end: "Nov 2019" },
              logo: "/logos/mb.png",
              tech: ["react.png", "graphql.png", "nextjs-logo.jpg"],
              content: `Developed the company web application (NextJS and GraphQL). Product advisor in UX/UI related
              issues. Bridge between Product and Engineering team.`,
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
              content: `Developed the company website (NextJS). Designed and deployed the website infrastructure (AWS).
              Developed Medo, a Patient Management Software (React, Redux, Loopback).
            `,
            },
          ]}
        />
      </AnimateSharedLayout>
    </InnerSection>
  </Section>
);

export default ExperienceSection;
