import styled from "styled-components";
import { motion } from "framer-motion";

const TechLayout = styled(motion.span)`
  display: flex;
  justify-content: flex-start;
  margin-left: auto;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    ${({ mobileHide, theme }) =>
      mobileHide ? "display: none;" : `margin: ${theme.unit}px 0;`}
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    ${({ desktopHide }) => (desktopHide ? "display: none;" : "")}
  }
`;

export default TechLayout;
