import React, { useState } from "react";
import PropTypes from "prop-types";

import CollapsibleListItem from "../CollapsibleListItem";
import Container from "./assets/Container";
import { theme } from "../../theme";
import ListTitle from "./assets/ListTitle";

const CollapsibleList = ({ items, title }) => {
  const [selected, setSelected] = useState(null);
  return (
    <Container layout initial={{ borderRadius: theme.unit * 3 }}>
      <ListTitle layout>{title}</ListTitle>
      {items.map((e, i) => (
        <CollapsibleListItem
          tech={e.tech}
          key={e.title + e.company}
          title={e.title}
          company={e.company}
          period={e.period}
          content={e.content}
          logo={e.logo}
          selected={selected === i}
          onClick={() => {
            setSelected(i);
          }}
        />
      ))}
    </Container>
  );
};

CollapsibleList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default CollapsibleList;
