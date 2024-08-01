import React, { CSSProperties } from "react";
type Props = {
    type?: string;
    value?: string | number;
    placeholder?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    w?: number | string;
    max?: number;
    min?: number;
    onChange?: (val: string | number) => void;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
};
declare const Input: React.FC<Props>;
export default Input;
