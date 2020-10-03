import styled from "styled-components";
import { motion } from "framer-motion";

const Avatar = styled(motion.div)`
  background-color: ${({ theme, light }) =>
    light ? theme.colors.text.primary : theme.colors.grey[500]};
  min-width: ${({ theme }) => theme.unit * 5}px;
  min-height: ${({ theme }) => theme.unit * 5}px;
  max-width: ${({ theme }) => theme.unit * 5}px;
  max-height: ${({ theme }) => theme.unit * 5}px;
  border-radius: 50%;
  ${({ logo, light, theme }) =>
    logo &&
    `
    background-image: url("${logo}");
    background-position: center; 
    background-size: ${light ? `${theme.unit * 4}px` : "cover"};
    background-repeat: no-repeat;
    ${light ? `margin-right: ${theme.unit}px;` : ""}
    `}
`;

export default Avatar;
