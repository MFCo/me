import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

import { theme } from "../../theme";
import Container from "./assets/Container";
import AccordionItemHeader from "../AccordionItemHeader";

const Accordion = ({ item, expanded, setExpanded }) => {
  const isOpen = item.id === expanded;
  return (
    <Container onClick={() => setExpanded(isOpen ? false : item.id)} layout>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen
            ? theme.colors.grey[200]
            : theme.colors.grey[100],
        }}
      >
        <AccordionItemHeader
          tech={item.tech}
          type={item.type}
          name={item.name}
          isOpen={isOpen}
        />
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p> Holis </p>
          </motion.section>
        )}
      </AnimatePresence>
    </Container>
  );
};

Accordion.propTypes = {
  item: PropTypes.object,
  expanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  setExpanded: PropTypes.func,
};

export default Accordion;
