import React from "react";

import List from "../List";
import Mail from "../MainMail";

import { theme } from "../../theme";
import AboveTheFold from "./assets/AboveTheFold";
import ScrollArrow from "./assets/ScrollArrow";
import Arrow from "./assets/Arrow";
import Link from "./assets/Link";

const WelcomeSection = () => (
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
    <Link to="experience" smooth duration={500}>
      <ScrollArrow
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        <Arrow />
      </ScrollArrow>
    </Link>
  </AboveTheFold>
);

export default WelcomeSection;
