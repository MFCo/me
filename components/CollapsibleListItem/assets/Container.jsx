import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.li)`
  border-radius: ${({ theme }) => theme.unit}px;
  padding: ${({ theme }) => theme.unit * 2}px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  margin-bottom: ${({ theme }) => theme.unit * 2}px;
  overflow: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export default Container;
