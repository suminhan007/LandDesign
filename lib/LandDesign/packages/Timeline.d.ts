import { default as React } from 'react';
export type TimelineProps = {
    data?: {
        title?: string | React.ReactNode;
        subTitle?: string | React.ReactNode;
        desc?: string | React.ReactNode;
        /** 自定义图标 */
        icon?: React.ReactNode;
    }[];
    direction?: "row" | "column";
    /** 全局自定义图标 */
    icon?: React.ReactNode;
};
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
