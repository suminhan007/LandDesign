import React, { CSSProperties } from "react";
export type StepsItemType = {
    /** 唯一标识 */
    key: number | string;
    /** 标题 */
    title?: string;
    /** 描述文字 */
    desc?: string;
};
export type StepsProps = {
    /** 数据 */
    data?: StepsItemType[];
    /** 当前进度 */
    current?: number | string;
    /** 已完成步骤 */
    finished?: (number | string)[];
    onClick?: (item: StepsItemType) => void;
    /** 是否显示分割线 */
    useDivider?: boolean;
    /** 分割线宽度 */
    dividerWidth?: string;
    style?: CSSProperties;
    className?: string;
};
declare const Steps: React.FC<StepsProps>;
export default Steps;
