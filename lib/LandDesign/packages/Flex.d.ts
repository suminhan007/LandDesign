import { default as React, CSSProperties } from 'react';
export type FlexProps = {
    w?: string;
    h?: string;
    column?: boolean;
    wrap?: boolean;
    justify?: "start" | "center" | "end" | "space-between" | "space-around";
    align?: "start" | "center" | "end" | "baseline";
    gap?: string | number;
    bothCenter?: boolean;
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
};
declare const Flex: React.FC<FlexProps>;
export default Flex;
