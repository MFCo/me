import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.unit * 3}px;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: ${({ theme }) => theme.unit * 3}px;
  margin: 0 0 ${({ theme }) => theme.unit * 3}px 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin: 0 ${({ theme }) => theme.unit * 2}px
      ${({ theme }) => theme.unit * 3}px ${({ theme }) => theme.unit * 2}px;
  }
`;

export default Container;
