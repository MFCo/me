import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

import Container from "./assets/Container";
import Avatar from "./assets/Avatar";
import HeaderLayout from "./assets/HeaderLayout";
import CompanyText from "./assets/CompanyText";
import TitleText from "./assets/TitleText";
import TitlesLayout from "./assets/TitlesLayout";
import { theme } from "../../theme";

const ListItemText = ({ title, company, content, logo }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container
      layout
      onClick={() => setOpen(!open)}
      initial={{ borderRadius: theme.unit }}
    >
      <HeaderLayout layout>
        <Avatar layout logo={logo} />
        <TitlesLayout layout>
          <CompanyText layout>{company}</CompanyText>
          <TitleText layout>{title}</TitleText>
        </TitlesLayout>
      </HeaderLayout>
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.p layout>{content}</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

ListItemText.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  content: PropTypes.string,
  logo: PropTypes.string,
};

export default ListItemText;
