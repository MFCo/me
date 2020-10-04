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
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin: 0 ${({ theme }) => theme.unit * 2}px ${({ theme }) => theme.unit}px
      ${({ theme }) => theme.unit * 2}px;
  }
`;

export default Container;
