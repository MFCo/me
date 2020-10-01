import React from "react";
import List from "../components/List";

const Home = () => (
  <List
    items={[
      { text: "I'm", color: "#ff0055" },
      { text: "trying", color: "#0099ff" },
      { text: "my", color: "#22cc88" },
      { text: "not-best", color: "#ffaa00" },
    ]}
  />
);

export default Home;
