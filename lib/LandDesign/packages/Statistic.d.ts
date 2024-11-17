import { default as React } from 'react';
export type StatisticProps = {
    value?: number;
    /** 前缀 */
    prefix?: React.ReactNode;
    /** 后缀 */
    suffix?: React.ReactNode;
    /** 单位 */
    unit?: string;
    /** 趋势 */
    trendIcon?: "up" | "down" | "default";
    animation?: boolean;
};
declare const Statistic: React.FC<StatisticProps>;
export default Statistic;
