import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

enum LinkType {
  SELF = "self",
  OTHERS = "others",
}
export type MenuItemType = {
  key: number;
  title?: string;
  isNew?: boolean;
  simple?: boolean;
  href?: string;
  linkType?: LinkType;
  dropData?: MenuItemType[];
};
export type MenuProps = {
  data?: MenuItemType[];
  style?: CSSProperties;
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ data, style, className }) => {
  const [actived, setActived] = useState<number>(0);
  const handleChangeTab = (item: MenuItemType) => {
    item.linkType === LinkType. && setActived(item.key);
  };
  return (
    <StyledMenu className={className} style={style}>
      {data?.map((item) => (
        <a
          role="button"
          key={item.key}
          className={`land-nav-link ${item.simple ? "simple" : ""}`}
          onClick={() => handleChangeTab?.(item)}
        >
          {item.title}
        </a>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  position: relative;
  display: flex;
  gap: var(--gap-12);
  .land-nav-link {
    padding: var(--padding-medium);
    &:hover {
      background-color: var(--color-bg-1);
    }
    &.simple {
      cursor: default;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 20px;
      height: 2px;
      transform: translateX(-50%);
      border-radius: 1px;
      background-color: var(--color-primary-6);
    }
  }
`;

export default Menu;
