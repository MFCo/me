import styled from "styled-components";
import { motion } from "framer-motion";

const TechLayout = styled(motion.span)`
  margin-left: ${({ theme }) => theme.unit * 2}px;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    ${({ mobile, theme }) =>
      !mobile ? "display: none;" : `margin: ${theme.unit}px 0;`}
  }
`;

export default TechLayout;
