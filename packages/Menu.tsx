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

export type ThemeType = {
  hoverColor?: string,
  hoverBg?: string,
  activeColor?: string,
  activeBg?: string,
  lineColor?: string,
};

export type MenuItemType = {
  key: number;
  title?: string;
  subTitle?: string;
  icon?: string | React.ReactNode;
  isNew?: string | React.ReactNode | boolean;
  href?: string;
  clickType: ClickType;
  dropData?: MenuItemType[];
};

export type MenuProps = {
  /* 当前选中项 */
  actived?: number;
  /* 数据 */
  data?: MenuItemType[];
  /* 导航排列方向 */
  direction?: "row" | "column";
  /* 导航主题 */
  theme?: ThemeType;
  border?: boolean;
  /* 一级导航选项对应的 style */
  itemStyle?: CSSProperties;
  /* 一级导航选项对应的 className */
  itemClassName?: string;
  /* 导航 wrap 对应的 style */
  style?: CSSProperties;
  /* 导航 wrap 对应的 className */
  className?: string;
};

const Menu: React.FC<MenuProps> = ({
  actived,
  data,
  direction = "row",
  theme = { hoverColor: 'var(--color-text-1)', hoverBg: 'var(--color-bg-1)', activeColor: 'var(--color-text-1)' },
  border = true,
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
      column={direction === 'column'}
      border={border}
      theme={theme}
    >
      {data?.map((item) => (
        <div className={`land-nav-item ${item.clickType === ClickType.SIMPLE ? "simple" : ""
          } ${item.clickType === ClickType.DISABLED ? "disabled" : ""} ${newActived === item.key ? "actived" : ""
          }`}>
          <a
            role="button"
            key={item.key}
            className={`land-nav-link ${itemClassName}`}
            style={itemStyle}
            onClick={() => handleChangeTab?.(item)}
          >
            {typeof item.icon === "string" ? (
              <img src={item.icon} className="land-nav-icon" />
            ) : (
              item.icon
            )}
            <p className="land-nav-title" data-title={item.title}>{item.title}</p>
            <span className="land-nav-sub-title">{item.subTitle}</span>
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
  column?: boolean;
  border?: boolean;
  theme?: ThemeType;
}>`
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  gap: var(--gap-4);
  height: ${(props) => (!props.column ? "100%" : "")};
  width: ${(props) => (props.column ? "100%" : "fit-content")};
  border-bottom: ${props => (props.border && !props.column) ? 'var(--border-1) solid var(--color-border-1)' : ''};
  border-right: ${props => (props.border && props.column) ? 'var(--border-1) solid var(--color-border-1)' : ''}; 
 .land-nav-item {
    position: relative;
    height: ${(props) => (!props.column ? "100%" : "")};
    width: ${(props) => (props.column ? "100%" : "")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-4);
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: ${(props) => (!props.column ? "50%" : "0")};
      bottom: ${(props) => (!props.column ? "0" : "50%")};
      width: ${(props) => (!props.column ? '12px' : '2px')};
      height: ${(props) => (!props.column ? '2px' : props.theme.activeBg ? '100%' : 'calc(100% - 16px)')};
      transform: ${(props) =>
    !props.column
      ? `translateX(50%)`
      : "translateY(50%)"};
      transform-origin: center center;
      border-radius: 1px;
      background-color: ${props => props.theme.lineColor || 'var(--color-text-1)'};
      opacity: 0;
    }
    &:hover {
      color: ${props => props.theme.hoverColor};
      background-color: ${props => props.theme.hoverBg};
      .land-nav-title::before {
        color: ${props => props.theme.hoverColor};
        font-weight: 600;
      }
      svg path{
        stroke-width: 4px;
      }
    }
    &.actived {
      color: ${props => props.theme.hoverColor};
      background-color: ${props => props.theme.activeBg};
      .land-nav-title::before {
        color: ${props => props.theme.activeColor || 'var(--color-text-1)'};
        font-weight: 600;
      }
      &::after {
        opacity: 1;
        transition: opacity var(--transition-15) linear;
      }
      svg path{
        stroke-width: 4px;
      }
    }
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
  }
  .land-nav-link {
    padding: var(--padding-medium);
    display: flex;
    align-items: center;
    width: 100%;
    font-size: var(--font-content-large);
    white-space: nowrap;
    transition: background-color var(--transition-15) linear;
    cursor: pointer;
    color: var(--color-text-3);
    &:hover {
      color: ${props => props.theme.hoverColor};
    }
    .land-nav-title {
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
    .land-nav-icon {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }
    svg path{
      stroke-width: 3px;
    }
    .land-nav-sub-title {
      font-size: var(--font-content-small);
      opacity: var(--opacity-68);
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
