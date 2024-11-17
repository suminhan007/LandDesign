import { default as React, CSSProperties } from 'react';
import { InputProps } from './Input';
export type TagInputProps = {
    /** 初始标签 */
    tagData?: string[];
    /** 占位符 */
    placeholder?: string;
    w?: number | string;
    /** 允许输入的最大标签数 */
    maxLength?: number;
    /** 高亮文字数组 */
    highlightStr?: string[];
    /** 高亮内容样式 */
    highlightStyle?: CSSProperties;
    onChange?: (val: string[], e: any) => void;
    onEnter?: (val: string[], e: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (val: string[], e: any) => void;
    /** 标签样式 */
    tagStyle?: CSSProperties;
    tagClassName?: string;
    className?: string;
    style?: CSSProperties;
} & InputProps;
declare const TagInput: React.FC<TagInputProps>;
export default TagInput;
