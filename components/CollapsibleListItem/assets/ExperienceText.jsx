import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceText = styled(motion.p)`
  font-size: 1.4rem;
  opacity: 0.8;
  font-weight: 800;
  margin: 0;
  text-align: right;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    text-align: left;
    width: 100%;
  }
`;

export default ExperienceText;
