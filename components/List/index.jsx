import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimateSharedLayout } from "framer-motion";

import ListItemText from "../ListItemText";
import Container from "./assets/Container";

const List = ({ items }) => {
  const [selected, setSelected] = useState(0);
  return (
    <AnimateSharedLayout>
      <Container>
        {items.map((e, i) => (
          <ListItemText
            key={e.title + e.color}
            title={e.text}
            color={e.color}
            selected={selected === i}
            onClick={() => {
              setSelected(i);
            }}
          />
        ))}
      </Container>
    </AnimateSharedLayout>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
