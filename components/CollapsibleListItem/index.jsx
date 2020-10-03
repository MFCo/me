import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";

import Container from "./assets/Container";
import Avatar from "./assets/Avatar";
import HeaderLayout from "./assets/HeaderLayout";
import CompanyText from "./assets/CompanyText";
import TitleText from "./assets/TitleText";
import TitlesLayout from "./assets/TitlesLayout";
import ExperienceText from "./assets/ExperienceText";

import { theme } from "../../theme";
import ExperienceSubtext from "./assets/ExperienceSubtext";
import ContentText from "./assets/ContentText";

const calcDiff = (start, end) => {
  end.add(1, "months");
  const years = end.diff(start, "year");
  start.add(years, "years");
  const months = end.diff(start, "months");
  return `${years ? `${years} yr${years === 1 ? "" : "s"} ` : ""}${
    months ? `${months} mo${months === 1 ? "" : "s"}` : ""
  }`;
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
                moment(period.start),
                period.end ? moment(period.end) : moment(),
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
            <ContentText layout>{content}</ContentText>
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
