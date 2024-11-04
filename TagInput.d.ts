import React, { CSSProperties } from "react";
export type TagInputProps = {
    /** 输入值 */
    value?: string;
    /** 占位符 */
    placeholder?: string;
    w?: number | string;
    /** 允许输入的最大标签数 */
    maxLength?: number;
    onChange?: (val: string | number, e: any) => void;
    onFocus?: (e: any) => void;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
};
declare const TagInput: React.FC<TagInputProps>;
export default TagInput;
