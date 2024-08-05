import React, { CSSProperties } from 'react';
export type AffixOffsetType = {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
};
export type AffixContainerProps = {
    /** 快捷设置图钉位置 */
    placement?: 'lt' | 'lb' | 'rt' | 'rb';
    /** 快捷定位时图钉与四周的距离 */
    gap?: number;
    /** 自定义位置 */
    offsetData?: AffixOffsetType;
    /** hover时隐藏 */
    hover?: boolean;
    /** hover时显示 */
    hoverShow?: boolean;
    innerStyle?: CSSProperties;
    innerClassName?: string;
    style?: CSSProperties;
    className?: string;
    /** 图钉内容 */
    content?: React.ReactNode;
    children?: React.ReactNode;
    [key: string]: any;
};
declare const AffixContainer: React.FC<AffixContainerProps>;
export default AffixContainer;
