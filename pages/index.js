import React from "react";
import styled from "styled-components";

import List from "../components/List";
import Mail from "../components/MainMail";

import { theme } from "../theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const Home = () => (
  <Container>
    <List
      items={[
        { text: "Let's", color: theme.colors.red },
        { text: "build", color: theme.colors.blue },
        { text: "something", color: theme.colors.green },
        { text: "meaningful", color: theme.colors.yellow },
      ]}
    />
    <Mail mail="marianococirio@gmail.com" />
  </Container>
);

export default Home;
