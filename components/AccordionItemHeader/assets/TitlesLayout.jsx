import styled from "styled-components";
import { motion } from "framer-motion";

const TitlesLayout = styled(motion.span)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export default TitlesLayout;
