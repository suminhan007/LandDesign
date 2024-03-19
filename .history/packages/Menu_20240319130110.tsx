import React, { CSSProperties } from "react";
import styled from "styled-components";

export type MenuItemType = {
  key: number;
  title?: string;
  isNew?: boolean;
  clickType
}
export type MenuProps = {
  data?: MenuItemType[];
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ data, children, style, className }) => {
  return <StyledMenu className={className} style={style}>{children}</StyledMenu>;
};

const StyledMenu = styled.a<{

}>`
`;

export default Menu;
