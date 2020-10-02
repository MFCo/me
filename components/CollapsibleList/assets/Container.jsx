import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  width: ${({ theme }) => theme.unit * 80}px;
  display: flex;
  flex-direction: column;
  background: white;
  padding: ${({ theme }) => theme.unit * 3}px;
  border-radius: ${({ theme }) => theme.unit * 3}px;
  margin: 0 ${({ theme }) => theme.unit * 2}px
    ${({ theme }) => theme.unit * 3}px ${({ theme }) => theme.unit * 2}px;
`;

export default Container;
