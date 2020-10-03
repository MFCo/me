import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

import Container from "./assets/Container";
import Avatar from "./assets/Avatar";
import HeaderLayout from "./assets/HeaderLayout";
import CompanyText from "./assets/CompanyText";
import TitleText from "./assets/TitleText";
import TitlesLayout from "./assets/TitlesLayout";
import ExperienceText from "./assets/ExperienceText";

import { theme } from "../../theme";
import ExperienceSubtext from "./assets/ExperienceSubtext";

const calcDiff = (start, end) => {
  const months = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 31),
  );
  const years = Math.floor(months / 12);
  return `${years > 0 ? `${years} yrs ` : ""}${months} mos`;
};

const ListItemText = ({ title, company, content, period, logo }) => {
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
          <span>
            <CompanyText layout>{company}</CompanyText>
            <TitleText layout>{title}</TitleText>
          </span>
          <span>
            <ExperienceText layout>
              {`${period.start} - ${period.end || "Present"}`}
            </ExperienceText>
            <ExperienceSubtext layout>
              {calcDiff(
                new Date(period.start),
                period.end ? new Date(period.end) : new Date(),
              )}
            </ExperienceSubtext>
          </span>
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
  period: PropTypes.shape({ start: PropTypes.string, end: PropTypes.string }),
  logo: PropTypes.string,
};

export default ListItemText;
