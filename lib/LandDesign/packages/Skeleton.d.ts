import { default as React, CSSProperties } from 'react';
type SkeletonProps = {
    /** 骨架屏宽度 */
    width?: number | string;
    /** 骨架屏高度 */
    height?: number | string;
    /** 骨架屏起始渐变色 */
    start?: string;
    /** 骨架屏结束渐变色 */
    stop?: string;
    style?: CSSProperties;
    className?: string;
};
declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
