import { default as React, CSSProperties } from 'react';
export type ProgressProps = {
    /** 当前进度百分比 */
    value?: number;
    /** 隐藏进度条数值 */
    hideLabel?: boolean;
    style?: CSSProperties;
    className?: string;
};
declare const Progress: React.FC<ProgressProps>;
export default Progress;
