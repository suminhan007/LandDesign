import React, { CSSProperties } from "react";
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

export type ThemeType = {
  hoverColor?: string,
  hoverBg?: string,
  activeColor?: string,
  activeBg?: string,
  lineColor?: string,
};

export type MenuItemType = {
  key: number | string;
  title: string;
  path?: string;
  subTitle?: string;
  icon?: string | React.ReactNode;
  isNew?: string | React.ReactNode | boolean;
  href?: string;
  clickType?: ClickType;
  /** 下拉菜单是否展开 */
  open?: boolean;
  dropData?: MenuItemType[];
  [key: string]: any;
};

export type MenuProps = {
  /* 当前选中项 */
  active?: number | string;
  /* 数据 */
  data?: MenuItemType[];
  /* 导航排列方向 */
  direction?: "row" | "column";
  /* 导航主题 */
  theme?: ThemeType;
  /** 边框 */
  border?: boolean;
  /** 切换导航项 */
  onChange?: (item: MenuItemType) => void;
  onDropChange?: (item: MenuItemType, parentItem: MenuItemType) => void;
  /* 一级导航选项对应的 style */
  itemStyle?: CSSProperties;
  /* 一级导航选项对应的 className */
  itemClassName?: string;
  /* 导航 wrap 对应的 style */
  style?: CSSProperties;
  /* 导航 wrap 对应的 className */
  className?: string;
  /** 二级菜单相关props */
  dropProps?: MenuProps;
};

const Menu: React.FC<MenuProps> = ({
  active,
  data,
  direction = "row",
  theme = {
    hoverColor: "var(--color-text-1)",
    hoverBg: "var(--color-bg-1)",
    activeColor: "var(--color-text-1)",
  },
  border = true,
  onChange,
  onDropChange,
  dropProps,
  itemStyle,
  itemClassName = "",
  style,
  className = "",
}) => {
  return (
    <StyledMenu
      className={`land-menu ${className}`}
      style={style}
      column={direction === "column"}
      border={border}
    >
      {data?.map((item, index) => (
        <div
          key={item.key ?? index}
          className={`land-menu-item ${
            item.clickType === ClickType.SIMPLE ? "simple" : ""
          } ${item.clickType === ClickType.DISABLED ? "disabled" : ""}`}
          style={itemStyle}
        >
          <StyleMenuLink
            role="button"
            key={item.key}
            className={`land-menu-link ${
              active === item.key ? "active" : ""
            } ${itemClassName}`}
            onClick={() => onChange?.(item)}
            column={direction === "column"}
            theme={theme}
          >
            {typeof item.icon === "string" ? (
              <img src={item.icon} className="land-menu-icon" />
            ) : (
              item.icon
            )}
            <p className="land-menu-title" data-title={item.title}>
              {item.title}
            </p>
            <span className="land-menu-sub-title">{item.subTitle}</span>
            {item.isNew && (
              <i className="land-menu-new">
                {typeof item.isNew === "boolean" ? "NEW" : item.isNew}
              </i>
            )}
          </StyleMenuLink>
          {item.dropData && (
            <div className={`land-menu-drop-wrap ${item.open ? "open" : ""}`}>
              <div className="land-menu-drop">
                <Menu
                  data={item.dropData}
                  onChange={(dropItem) => onDropChange?.(dropItem, item)}
                  direction="column"
                  {...dropProps}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div<{
  column?: boolean;
  border?: boolean;
  theme?: ThemeType;
}>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  gap: var(--gap-4);
  height: ${(props) => (!props.column ? "100%" : "")};
  width: ${(props) => (props.column ? "100%" : "fit-content")};
  border-bottom: ${(props) =>
    props.border && !props.column
      ? "var(--border-1) solid var(--color-border-1)"
      : ""};
  border-right: ${(props) =>
    props.border && props.column
      ? "var(--border-1) solid var(--color-border-1)"
      : ""};
  box-sizing: border-box;
  .land-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: ${(props) => (!props.column ? "100%" : "")};
    width: 100%;
    border-radius: var(--radius-4);
    transition: all var(--transition-15) linear;
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
    &:hover .land-menu-drop-wrap {
      opacity: 1;
      pointer-events: all;
      transform: scaleY(1);
    }
  }
  .land-menu-drop-wrap {
    width: 100%;
    .land-menu-drop {
      padding: 8px 0px;
    }
    &.open {
      padding: 0;
      .land-menu-link {
        padding-left: 32px;
      }
      .land-menu {
        position: static;
        border: none;
        padding: 0;
      }
    }
    &:not(.open) {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 8px;
      z-index: 1;
      opacity: 0;
      transform: scaleY(0.8);
      transform-origin: top center;
      pointer-events: none;
      transition: all var(--transition-15) linear;
      .land-menu-drop {
        background-color: var(--color-bg-white);
        border-radius: var(--radius-8);
        box-shadow: var(--boxshadow-medium);
      }
    }
  }
`;

const StyleMenuLink = styled.a<{
  column?: boolean;
  theme?: ThemeType;
}>`
  position: relative;
  padding: var(--padding-medium);
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  font-size: var(--font-content-large);
  white-space: nowrap;
  box-sizing: border-box;
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  color: var(--color-text-3);
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: ${(props) => (!props.column ? "50%" : "0")};
    bottom: ${(props) => (!props.column ? "0" : "50%")};
    width: ${(props) => (!props.column ? "12px" : "2px")};
    height: ${(props) =>
    !props.column
      ? "2px"
      : props.theme.activeBg
        ? "100%"
        : "calc(100% - 16px)"};
    transform: ${(props) =>
    !props.column ? `translateX(50%)` : "translateY(50%)"};
    transform-origin: center center;
    border-radius: 1px;
    background-color: ${(props) =>
    props.theme.lineColor || "var(--color-text-1)"};
    opacity: 0;
  }
  &:hover {
    color: ${(props) => props.theme.hoverColor};
    background-color: ${(props) => props.theme.hoverBg};
    .land-menu-title::before {
      color: ${(props) => props.theme.hoverColor};
      font-weight: 600;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  &.active {
    color: ${(props) => props.theme.hoverColor};
    background-color: ${(props) => props.theme.activeBg};
    .land-menu-title::before {
      color: ${(props) => props.theme.activeColor || "var(--color-text-1)"};
      font-weight: 600;
    }
    &::after {
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  .land-menu-title {
    position: relative;
    color: transparent;
    font-weight: 600;
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
      font-weight: 400;
      text-align: center;
      line-height: 40px;
    }
  }

  svg,
  .land-menu-icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
  svg path {
    stroke-width: 3px;
  }
  .land-menu-sub-title {
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }
  .land-menu-new {
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
  @media screen and (max-width: 800px) {
    font-size: var(--font-content-medium);
  }
`;

export default Menu;
