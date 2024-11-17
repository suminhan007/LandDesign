import { default as React, CSSProperties } from 'react';
export declare enum gridType {
    ColumnFit = "column-fit",
    ColumnFill = "column-fill",
    RowFit = "row-fit",
    RowFill = "row-fill",
    ColumnRepeat = "column-repeat",
    RowRepeat = "row-repeat",
    Default = "default"
}
export type GridProps = {
    /** 常见的几种 grid 布局 */
    type?: gridType;
    /** 自动填充模式下的最小宽度/高度 */
    autoSize?: number;
    /** 按行或按列重复时的重复数量 */
    repeatNum?: number;
    /** 行列间隙 */
    gap?: number | number[];
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
};
declare const Grid: React.FC<GridProps>;
export default Grid;
