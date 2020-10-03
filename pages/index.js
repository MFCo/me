import React from "react";
import styled from "styled-components";

import List from "../components/List";
import Mail from "../components/MainMail";
import ExperienceSection from "../components/ExperienceSection";
import { theme } from "../theme";

const AboveTheFold = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
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
    <ExperienceSection />
  </>
);

export default Home;
