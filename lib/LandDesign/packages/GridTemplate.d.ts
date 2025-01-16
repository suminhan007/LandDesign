import { default as React, CSSProperties } from 'react';
import { CommonProps } from './types';
type GridTemplateProps = {
    /** 宫格数量： 默认为1 */
    type?: string;
    /** 宫格比例： 默认方形 */
    ratio?: number;
    /** 宫格图间距 */
    gap?: number;
    /** 宫格样式 */
    gridStyle?: CSSProperties;
    gridClassName?: string;
    children?: React.ReactNode;
} & CommonProps;
declare const GridTemplate: React.FC<GridTemplateProps>;
export default GridTemplate;
