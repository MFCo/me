import styled from "styled-components";
import { motion } from "framer-motion";

const Underline = styled(motion.div)`
  width: 100%;
  height: ${({ theme }) => theme.unit}px;
  border-radius: ${({ theme }) => theme.unit / 2}px;
  background: ${({ color }) => color};
  position: absolute;
  bottom: -${({ theme }) => theme.unit}px;
`;

export default Underline;
