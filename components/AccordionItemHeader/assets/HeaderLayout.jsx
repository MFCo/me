import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderLayout = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: ${({ theme }) => theme.unit * 2}px;
`;

export default HeaderLayout;
