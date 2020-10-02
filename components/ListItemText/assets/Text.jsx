import styled from "styled-components";
import { motion } from "framer-motion";

const Text = styled(motion.li)`
  font-size: 4.8rem;
  font-weight: 800;
  position: relative;
  margin: 0;
  margin-left: ${({ theme }) => theme.unit * 2}px;
  color: ${({ theme }) => theme.colors.text.primary};
  list-style: none;
  padding: 0;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export default Text;
