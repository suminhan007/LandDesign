import React, { CSSProperties } from "react";
export type InputProps = {
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
declare const Input: React.FC<InputProps>;
export default Input;
