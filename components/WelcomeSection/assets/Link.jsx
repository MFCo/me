import { Link } from "react-scroll";
import styled from "styled-components";

const CustomLink = styled(Link)`
  position: absolute;
  bottom: ${({ theme }) => theme.unit * 10}px;
  left: 50%;
  cursor: pointer;
  margin: 0 0 0 -${({ theme }) => theme.unit * 3}px;
  -webkit-tap-highlight-color: transparent;
`;

export default CustomLink;
