import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
  margin-top: ${({ theme }) => theme.unit * 2}px;
  padding: 0 ${({ theme }) => theme.unit}px;
  font-size: 1.4rem;
`;

export default Content;
