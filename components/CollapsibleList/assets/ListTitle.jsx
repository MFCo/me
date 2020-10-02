import { motion } from "framer-motion";
import styled from "styled-components";

const ListTitle = styled(motion.h4)`
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0 0 ${({ theme }) => theme.unit * 2}px 0;
  text-align: center;
`;

export default ListTitle;
