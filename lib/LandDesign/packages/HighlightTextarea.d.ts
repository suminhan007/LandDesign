import { default as React } from 'react';
import { CommonProps } from './types';
type HighlightTextareaProps = {
    value?: string;
    highlightStr?: string[];
    /** 输入框宽度 */
    width?: number | string;
    onChange?: (val: string, e: any) => void;
} & CommonProps;
declare const HighlightTextarea: React.FC<HighlightTextareaProps>;
export default HighlightTextarea;
