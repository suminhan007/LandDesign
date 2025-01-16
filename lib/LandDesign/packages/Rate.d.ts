import { default as React, CSSProperties } from 'react';
export type RateProps = {
    value?: number;
    count?: number;
    defaultColor?: string;
    activeColor?: string;
    /** 自定义形状*/
    customSvg?: React.ReactNode;
    onChange?: (value: number) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Rate: React.FC<RateProps>;
export default Rate;
