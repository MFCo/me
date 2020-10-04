import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.li)`
  margin-bottom: ${({ theme }) => theme.unit}px;
  overflow: hidden;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.unit}px;
  -webkit-tap-highlight-color: transparent;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export default Container;
