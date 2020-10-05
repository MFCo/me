import styled from "styled-components";
import { motion } from "framer-motion";

const Avatar = styled(motion.div)`
  background-color: ${({ theme, light }) =>
    light ? theme.colors.background : theme.colors.grey[500]};
  min-width: ${({ theme, light }) => theme.unit * (light ? 4 : 5)}px;
  min-height: ${({ theme, light }) => theme.unit * (light ? 4 : 5)}px;
  max-width: ${({ theme, light }) => theme.unit * (light ? 4 : 5)}px;
  max-height: ${({ theme, light }) => theme.unit * (light ? 4 : 5)}px;
  border-radius: 50%;
  ${({ logo, light, theme }) =>
    logo &&
    `
    background-image: url("${logo}");
    background-position: center; 
    background-size: ${light ? `${theme.unit * 3}px` : "cover"};
    background-repeat: no-repeat;
    ${light ? `margin-right: ${theme.unit}px;` : ""}
    `}
`;

export default Avatar;
