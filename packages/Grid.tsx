import React, { CSSProperties, useMemo } from "react";

export enum gridType {
  ColumnFit = 'column-fit',
  ColumnFill = 'column-fill',
  RowFit = 'row-fit',
  RowFill = 'row-fill',
  ColumnRepeat = 'column-repeat',
  RowRepeat = 'row-repeat',
  Default = 'default',
};

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

const Grid: React.FC<GridProps> = ({
  type = gridType.Default,
  autoSize = 100,
  repeatNum = 1,
  gap = 8,
  children,
  style,
  className = ''
}) => {
  const gridStyle = useMemo(() => {
    let styleList = {
      display: 'grid',
      columnGap: typeof gap === 'number' ? gap : gap[0],
      rowGap: typeof gap === 'number' ? gap : gap[1],
    };
    if (type === gridType.Default) {
      return Object.assign(styleList, style);
    } else {
      switch (type) {
        case gridType.ColumnFit: return Object.assign(styleList, { gridTemplateColumns: `repeat(auto-fit, minmax(${autoSize}, 1fr))` }); break;
        case gridType.ColumnFill:
          return Object.assign(styleList, { gridTemplateColumns: `repeat(auto-fill, minmax(${autoSize}, 1fr))` }); break;
        case gridType.RowFit:
          return Object.assign(styleList, { gridTemplateRows: `repeat(auto-fit, minmax(${autoSize}, 1fr))` }); break;
        case gridType.RowFill:
          return Object.assign(styleList, { gridTemplateRows: `repeat(auto-fill, minmax(${autoSize}, 1fr))` }); break;
        case gridType.ColumnRepeat:
          return Object.assign(styleList, { gridTemplateColumns: `repeat(${repeatNum}, 1fr)` }); break;
        case gridType.RowRepeat:
          return Object.assign(styleList, { gridTemplateRows: `repeat(${repeatNum}, 1fr)` }); break;
        default: return Object.assign(styleList, style); break;
      }
    }
  }, [type, autoSize, repeatNum, gap, style]);

  return <div className={`land-grid ${className}`} style={gridStyle}>{children}</div>;
};


export default Grid;
