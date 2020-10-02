import styled from "styled-components";
import { motion } from "framer-motion";

const TitlesLayout = styled(motion.span)`
  margin-left: ${({ theme }) => theme.unit * 2}px;
`;

export default TitlesLayout;
