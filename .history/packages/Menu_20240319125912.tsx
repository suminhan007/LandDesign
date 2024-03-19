import React, { CSSProperties } from "react";
import styled from "styled-components";

type
export type MenuProps = {
  data?: 
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ children, style, className }) => {
  return <StyledMenu className={className} style={style}>{children}</StyledMenu>;
};

const StyledMenu = styled.a<{

}>`
`;

export default Menu;
