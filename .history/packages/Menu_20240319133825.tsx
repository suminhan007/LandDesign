import React, { CSSProperties, useState } from "react";
import styled from "styled-components";

export enum LinkType {
  SELF = "self",
  OTHERS = "others",
}
export type MenuItemType = {
  key: number;
  title?: string;
  isNew?: string | boolean;
  simple?: boolean;
  href?: string;
  linkType: LinkType;
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
    item.linkType === LinkType.SELF && setActived(item.key);
  };
  return (
    <StyledMenu className={className} style={style}>
      {data?.map((item) => (
        <a
          role="button"
          key={item.key}
          className={`land-nav-link ${item.simple ? "simple" : ""} ${
            actived === item.key ? "actived" : ""
          }`}
          data-title={item.title}
          onClick={() => handleChangeTab?.(item)}
        >
          {item.title}
          <i className="land-nav-new">
            {typeof item.isNew === "boolean" ? "NEW" : item.isNew}
          </i>
        </a>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: flex;
  gap: var(--gap-12);
  .land-nav-link {
    position: relative;
    padding: var(--padding-medium);
    border-radius: var(--radius-4);
    color: var(--color-text-2);
    font-size: var(--font-content-large);
    cursor: pointer;
    &:hover {
      background-color: var(--color-bg-1);
      &::before {
        font-weight: 600;
      }
    }
    &.simple {
      cursor: default;
    }
    &::before {
      content: attr(data-title);
      display: flex;
      position: absolute;
      height: 100%;
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
      opacity: 0;
    }
    &.actived {
      &::before {
        font-weight: 600;
      }
      &::after {
        opacity: 1;
      }
    }
    .land-nav-new {
      position: absolute;
      padding: var(--padding-small);
      top: -14px;
      right: -8px;
      font-size: var(--font-content-small);
      background-color: var(--color-link-6);
      color: var(--color-text-white);
      border-radius: 3px;
      box-sizing: ;
      transform: scale(0.75);
    }
  }
`;

export default Menu;
