import { Link } from "react-scroll";
import styled from "styled-components";

const CustomLink = styled(Link)`
  position: absolute;
  bottom: ${({ theme }) => theme.unit * 5}px;
  left: 50%;
  margin: 0 0 0 -${({ theme }) => theme.unit * 3}px;
`;

export default CustomLink;
