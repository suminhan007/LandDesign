import React, { CSSProperties } from "react";
import styled from "styled-components";
import Button from "./Button";

export type MenuItemType = {
  key: number;
  title?: string;
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
      {data?.map((item) => (
        <Button text={item.title} type="text" />
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.a<{}>`
  display: flex;
  gap: var(--gap-8);
`;

export default Menu;
