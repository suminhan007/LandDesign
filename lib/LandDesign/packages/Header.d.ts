import { default as React, CSSProperties } from 'react';
import { MenuProps } from './Menu';
export type HeaderProps = {
    h?: string;
    fixed?: boolean;
    filter?: number;
    borderBottom?: boolean;
    applications?: React.ReactNode;
    logo?: string | React.ReactNode;
    name?: string | React.ReactNode;
    divider?: boolean;
    /** 导航项位置 */
    align?: "start" | "center" | "end";
    menuProps?: MenuProps;
    rightComponent?: React.ReactNode;
    onLogoClick?: () => void;
    /** 到移动端的尺寸*/
    mobileSize?: number;
    style?: CSSProperties;
    className?: string;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
