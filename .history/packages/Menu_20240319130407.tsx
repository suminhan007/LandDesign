import React, { CSSProperties } from "react";
import styled from "styled-components";


export type MenuItemType = {
  key: number;
  title?: string | React.ReactNode;
  isNew?: boolean;
  linkOut?: boolean;
  href?: string;
  dropData?: MenuItemType[];
};
export type MenuProps = {
  data?: MenuItemType[];
  style?: CSSProperties;
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ data, style, className }) => {
  return (
    <StyledMenu className={className} style={style}>
      {d}
    </StyledMenu>
  );
};

const StyledMenu = styled.a<{

}>`
`;

export default Menu;
