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
  return (
    <StyledMenu className={className} style={style}>
      {data?.map((item) => (
        <Button
          text={item.title}
          type={actived === item.key ? "background" : "text"}
          onClick={() => setActived(item.key)}
        />
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div<{}>`
  display: flex;
  gap: var(--gap-12);
`;

export default Menu;
