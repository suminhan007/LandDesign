import React, { CSSProperties } from "react";
export declare enum ClickType {
    SELF = "self",
    OTHERS = "others",
    SIMPLE = "simple",
    DISABLED = "disabled"
}
export type ThemeType = {
    hoverColor?: string;
    hoverBg?: string;
    activeColor?: string;
    activeBg?: string;
    lineColor?: string;
};
export type MenuItemType = {
    key: number;
    title?: string;
    subTitle?: string;
    icon?: string | React.ReactNode;
    isNew?: string | React.ReactNode | boolean;
    href?: string;
    clickType?: ClickType;
    dropData?: MenuItemType[];
};
export type MenuProps = {
    active?: number;
    data?: MenuItemType[];
    direction?: "row" | "column";
    theme?: ThemeType;
    border?: boolean;
    /** 切换导航项 */
    onChange?: (item: MenuItemType) => void;
    itemStyle?: CSSProperties;
    itemClassName?: string;
    style?: CSSProperties;
    className?: string;
};
declare const Menu: React.FC<MenuProps>;
export default Menu;
