import { default as React } from 'react';
import { CommonProps } from './types';
type HighlightOnlyWrapTextareaProps = {
    text?: string;
    highlightStr?: string[];
    /** 输入框宽度 */
    width?: number | string;
    onChange?: (val: string, e: any) => void;
} & CommonProps;
declare const HighlightOnlyWrapTextarea: React.FC<HighlightOnlyWrapTextareaProps>;
export default HighlightOnlyWrapTextarea;
