import React, { CSSProperties, useState } from "react";
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
  const [actived, setActived] = useState<number>(0);
  const handleChangeTab = (id: number) => {
    
  }
  return (
    <StyledMenu className={className} style={style}>
      {data?.map((item) => (
        <a role="button" onClick={handleChangeTab}>
            {item.title}
        </a>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div<{}>`
  display: flex;
  gap: var(--gap-12);
`;

export default Menu;
