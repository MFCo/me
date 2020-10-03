import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceSubtext = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  font-weight: 500;
  margin: ${({ theme }) => theme.unit / 2}px 0 0 0;
  text-align: right;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin: 0;
    text-align: left;
  }
`;

export default ExperienceSubtext;
