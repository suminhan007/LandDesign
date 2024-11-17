import { default as React, CSSProperties } from 'react';
import { PopProps } from './Pop';
export type LinkProps = {
    href?: string;
    target?: string;
    status?: "default" | "primary" | "success" | "danger" | "warning";
    disabled?: boolean;
    active?: boolean;
    tip?: React.ReactNode | string;
    tipProps?: PopProps;
    children?: React.ReactNode | string;
    onClick?: (e: any) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Link: React.FC<LinkProps>;
export default Link;
