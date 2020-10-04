import styled from "styled-components";
import { motion } from "framer-motion";

const Header = styled(motion.header)`
  border-radius: ${({ theme }) => theme.unit}px;
  -webkit-tap-highlight-color: transparent;
`;

export default Header;
