import { default as React, CSSProperties } from 'react';
export type TitleProps = {
    title?: string | React.ReactNode;
    type?: "h1" | "h2" | "h3" | "h4" | "p";
    prefix?: string;
    sub?: string | React.ReactNode;
    info?: string | React.ReactNode;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
};
declare const Title: React.FC<TitleProps>;
export default Title;
