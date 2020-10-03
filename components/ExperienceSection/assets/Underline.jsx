import styled from "styled-components";
import { motion } from "framer-motion";

const Underline = styled(motion.div)`
  max-width: 110%;
  margin-top: -${({ theme }) => theme.unit * 2}px;
  height: ${({ theme }) => theme.unit * 2}px;
  background: ${({ color }) => color};
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin-bottom: ${({ theme }) => theme.unit * 3}px;
  }
`;

export default Underline;
