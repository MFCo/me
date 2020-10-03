import styled from "styled-components";
import { motion } from "framer-motion";

const ContentText = styled(motion.p)`
  font-size: 1.3rem;
  margin: ${({ theme }) => theme.unit}px 0 0 0;
`;

export default ContentText;
