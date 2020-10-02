import React from "react";
import styled from "styled-components";

import List from "../components/List";
import Mail from "../components/MainMail";

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
        { text: "I'm", color: "#ff0055" },
        { text: "trying", color: "#0099ff" },
        { text: "my", color: "#22cc88" },
        { text: "not-best", color: "#ffaa00" },
      ]}
    />
    <Mail mail="marianococirio@gmail.com" />
  </Container>
);

export default Home;
