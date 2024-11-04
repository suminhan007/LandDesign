import React, { CSSProperties } from "react";
export type InputProps = {
    type?: 'border' | 'background';
    /** 输入值 */
    value?: string | number;
    /** 输入类型 */
    inputType?: string;
    /** 占位符 */
    placeholder?: string;
    /** 前置内容 */
    prefix?: React.ReactNode;
    /** 是否有搜索按钮 */
    useSearch?: boolean;
    width?: number | string;
    /** 允许输入的最大字符数 */
    maxLength?: number;
    /** 是否显示字数 */
    showNumber?: boolean;
    /** 是否使用清除按钮 */
    showClear?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    onChange?: (val: string | number, e: any) => void;
    onFocus?: (e: any) => void;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
};
declare const Input: React.FC<InputProps>;
export default Input;
