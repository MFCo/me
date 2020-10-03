import { motion } from "framer-motion";
import styled from "styled-components";

const AboveTheFold = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.text.primary};
  width: ${({ theme }) => theme.unit * 6}px;
  height: ${({ theme }) => theme.unit * 6}px;
  position: relative;
  margin-top: auto;
`;

export default AboveTheFold;
