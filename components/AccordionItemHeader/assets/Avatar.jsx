import styled from "styled-components";
import { motion } from "framer-motion";

const Avatar = styled(motion.div)`
  background-color: transparent;
  min-width: ${({ theme }) => theme.unit * 5}px;
  min-height: ${({ theme }) => theme.unit * 5}px;
  max-width: ${({ theme }) => theme.unit * 5}px;
  max-height: ${({ theme }) => theme.unit * 5}px;
  border-radius: 50%;
  ${({ logo, theme }) =>
    logo &&
    `
    background-image: url("${logo}");
    background-position: center; 
    background-size: ${theme.unit * 5}px;
    background-repeat: no-repeat;
    margin-right: ${theme.unit}px;
    `}
`;

export default Avatar;
