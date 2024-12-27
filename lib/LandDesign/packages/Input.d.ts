import { default as React, CSSProperties } from 'react';
export type InputProps = {
    type?: 'border' | 'background' | 'transparent';
    /** 输入值 */
    value?: string;
    /** 输入类型 */
    inputType?: string;
    /** 占位符 */
    placeholder?: string;
    /** 结构前缀 */
    beforeContent?: React.ReactNode;
    /** 结构前缀 */
    afterContent?: React.ReactNode;
    /** 内容前缀 */
    prefix?: React.ReactNode;
    /** 内容后缀 */
    suffix?: React.ReactNode;
    /** 自定义输入框宽度 */
    width?: number | string;
    /** 允许输入的最大字符数 */
    maxLength?: number;
    /** 是否显示字数 */
    showNumber?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    onChange?: (val: string, e?: any) => void;
    /** enter事件 */
    onEnter?: (val: string, e?: any) => void;
    onBlur?: (e: any) => void;
    /** 清除 */
    onClear?: () => void;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
};
declare const Input: React.FC<InputProps>;
export default Input;
