import { motion } from "framer-motion";
import styled from "styled-components";

const Arrow = styled(motion.span)`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: ${({ theme }) => theme.unit * 2}px;
  height: ${({ theme }) => theme.unit * 2}px;
  margin: 0 0 -${({ theme }) => theme.unit / 2}px -${({ theme }) =>
      theme.unit}px;
  border-left: 1px solid ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  transform: rotate(-45deg);
  box-sizing: border-box;
`;

export default Arrow;
