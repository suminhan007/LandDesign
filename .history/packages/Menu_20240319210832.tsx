import React, { CSSProperties, useState } from "react";
import styled from "styled-components";

export enum ClickType {
  /* 当前页面切换 */
  SELF = "self",
  /* 外部跳转 */
  OTHERS = "others",
  /* 不可点击项（仅作为下拉框导航项的整合，通过下拉框子项切换，鼠标悬浮样式为 default） */
  SIMPLE = 'simple',
  /* 禁用 */
  DISABLED = 'disabled',
}
export type MenuItemType = {
  key: number;
  title?: string;
  icon?: string | React.ReactNode;
  isNew?: string | boolean;
  href?: string;
  clickType: ClickType;
  dropData?: MenuItemType[];
};

export type MenuProps = {
  actived?: number;
  data?: MenuItemType[];
  direction?: "row" | "column";
  theme?: "dot" | "background" | "line";
  itemStyle?: CSSProperties;
  itemClassName?: string;
  style?: CSSProperties;
  className?: string;
};

const Menu: React.FC<MenuProps> = ({
  actived,
  data,
  direction = "row",
  theme = "dot",
  itemStyle,
  itemClassName,
  style,
  className,
}) => {
  const [newActived, setNewActived] = useState<number>(actived);
  const handleChangeTab = (item: MenuItemType) => {
    item.clickType === ClickType.SELF && setNewActived(item.key);
  };
  return (
    <StyledMenu
      className={`land-menu ${className}`}
      style={style}
      direction={direction}
    >
      {data?.map((item) => (
        <div className="land-nav-item">
          <a
            role="button"
            key={item.key}
            className={`land-nav-link ${
              item.clickType === ClickType.SIMPLE ? "simple" : ""
            } ${item.clickType === ClickType.DISABLED ? "disabled" : ""} ${
              newActived === item.key ? "actived" : ""
            } ${theme} ${itemClassName}`}
            style={itemStyle}
            data-title={item.title}
            onClick={() => handleChangeTab?.(item)}
          >
            {typeof item.icon === "string" ? (
              <img src={item.icon} className="land-nav-icon" />
            ) : (
              item.icon
            )}
            {item.title}
            {item.isNew && (
              <i className="land-nav-new">
                {typeof item.isNew === "boolean" ? "NEW" : item.isNew}
              </i>
            )}
          </a>
        </div>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div<{
  direction?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: var(--gap-4);
  height: ${(props) => (props.direction === "row" ? "100%" : "")};
  .land-nav-item {
    position: relative;
    height: ${(props) => (props.direction === "row" ? "100%" : "")};
    width: ${(props) => (props.direction === "column" ? "100%" : "")};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .land-nav-link {
    padding: var(--padding-medium);
    border-radius: var(--radius-4);
    color: transparent;
    font-weight: 600;
    font-weight: 400;
    font-size: var(--font-content-large);
    white-space: nowrap;
    transition: background-color var(--transition-15) linear;
    cursor: pointer;
    &::before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: var(--color-text-3);
      text-align: center;
      line-height: 40px;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: ${(props) => (props.direction === "row" ? "50%" : "-4px")};
      bottom: ${(props) => (props.direction === "row" ? "0" : "50%")};
      width: 12px;
      height: 2px;
      transform: ${(props) =>
        props.direction === "row"
          ? `translateX(50%)`
          : "translateY(50%) rotate(90deg)"};
      transform-origin: center center;
      border-radius: 1px;
      background-color: var(--color-text-1);
      transition: opacity var(--transition-15) linear;
      opacity: 0;
    }
    &:hover {
      background-color: var(--color-bg-1);
      &::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
    }
    &.actived {
      &::before {
        color: var(--color-text-1);
        font-weight: 600;
      }
      &::after {
        opacity: 1;
      }
    }
    &.background {
      &.actived {
        &::before {
          color: var(--color-primary-6);
          background-color: var(--color-bg-1);
        }
        &::after {
          background-color: var(--color-primary-6);
        }
      }
    }
    &.line {
      &.actived {
        &::before {
          color: var(--color-primary-6);
        }
        &::after {
          background-color: var(--color-primary-6);
          width: ${(props) =>
            props.direction === "row" ? "calc(100% - 48px)" : "12px"};
        }
      }
    }
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }

    .land-nav-icon {
      width: 14px;
      height: 14px;
    }
    .land-nav-new {
      position: absolute;
      padding: var(--padding-small);
      top: -12px;
      right: -8px;
      font-size: var(--font-content-small);
      background-color: var(--color-link-1);
      color: var(--color-link-6);
      font-weight: 600;
      border-radius: 3px;
      box-sizing: border-box;
      transform: scale(0.65);
    }
  }
`;

export default Menu;
