import styled from "styled-components";
import { motion } from "framer-motion";

const Underline = styled(motion.div)`
  width: 100%;
  height: ${({ theme }) => theme.unit}px;
  border-radius: ${({ theme }) => theme.unit / 2}px;
  background: ${({ color }) => color};
  bottom: -${({ theme }) => theme.unit}px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin-bottom: ${({ theme }) => theme.unit * 3}px;
  }
`;

export default Underline;
