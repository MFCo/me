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
      myself. In 2018, I finished my MSc in Systems Engineering in Argentina.
      During my time at college I was focused on software performance and
      programming languages and how to improve developers experience, 
      I was ready to start a PhD and continue in the academic world.
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
      Now, I'm lucky enough to be able to work again in my first passion, 
      improving the developers experience. And also, helping to make the web 
      faster, more accessible, and more inclusive.
    </SectionText>
    <InnerSection>
      <AnimateSharedLayout>
        <CollapsibleList
          title="Product"
          items={[
            {
              company: "Vercel",
              title: "Senior Product Manager",
              period: { start: "Apr 2022", end: null },
              logo: "/logos/vercel.jpeg",
              content: `Building an open-source developer tools platform that enables developers to build and iterate 
              on the web without sinking time and money into DevOps.
              `,
            },
            {
              company: "GoTo (ex LogMeIn)",
              title: "Product Manager",
              period: { start: "Oct 2021", end: "Mar 2022" },
              logo: "/logos/goto.png",
              content: `Set the strategy, roadmap, and product definition for Backend Services and public APIs. Own 
              backend unification to move from an inefficient backend architecture split across multiple products, 
              to a unified approach while not neglecting the current customers’ problems.
              `,
            },
            {
              company: "Medbelle",
              title: "Product Manager",
              period: { start: "Nov 2019", end: "Sept 2021" },
              logo: "/logos/mb.png",
              content: `Set the strategy, roadmap, and product definition for B2B and internal products. This involves 
              bridging gaps between different functions within the company and external stakeholders as Hospitals and Surgeons. 
              Moving the pre-existent working model into a data-driven decision-making working model. Running tests and 
              analyzing data to prioritize major impact problems to tackle.`,
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
              period: { start: "Jun 2018", end: "Oct 2019" },
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
