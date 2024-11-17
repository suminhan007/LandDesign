import { default as React, CSSProperties } from 'react';
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
    active?: number | string;
    data?: MenuItemType[];
    direction?: "row" | "column";
    theme?: ThemeType;
    /** 边框 */
    border?: boolean;
    /** 切换导航项 */
    onChange?: (item: MenuItemType) => void;
    onDropChange?: (item: MenuItemType, parentItem: MenuItemType) => void;
    itemStyle?: CSSProperties;
    itemClassName?: string;
    style?: CSSProperties;
    className?: string;
    /** 二级菜单相关props */
    dropProps?: MenuProps;
};
declare const Menu: React.FC<MenuProps>;
export default Menu;
