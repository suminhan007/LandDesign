import { default as React, CSSProperties } from 'react';
import { PopProps } from './Pop';
export type ButtonProps = {
    text?: string;
    subText?: string;
    icon?: React.ReactNode;
    width?: string;
    height?: string;
    justify?: "center" | "start" | "end";
    type?: "text" | "background" | "border" | "line";
    status?: "default" | "primary" | "warning" | "danger" | "success";
    /** 按钮尺寸 */
    size?: 'small' | 'default' | 'large';
    disabled?: boolean;
    pop?: React.ReactNode | string;
    PopProps?: PopProps;
    href?: string;
    target?: "_self" | "_blank" | "_top" | "_parent";
    onClick?: (e: React.UIEvent) => void;
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
