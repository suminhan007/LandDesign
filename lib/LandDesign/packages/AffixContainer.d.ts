import { default as React, CSSProperties, ReactNode } from 'react';
export type AffixContainerItemProps = {
    /** 标签内容 */
    content?: ReactNode;
    /** 标签距离容器边距 */
    gap?: number;
    /** 圆角 */
    radius?: number | string;
    /** 暗色背景 */
    dark?: boolean;
    /** 1:1 */
    squareSize?: number;
    /** 使用默认背景 */
    custom?: boolean;
    /** hover 时显示 */
    hoverShow?: boolean;
    /** hover 时隐藏 */
    hoverHide?: boolean;
    /** 层级 */
    zIndex?: number;
    onClick?: (e: any) => void;
    className?: string;
    style?: CSSProperties;
};
export type AffixContainerProps = {
    ltOption?: AffixContainerItemProps;
    rtOption?: AffixContainerItemProps;
    lbOption?: AffixContainerItemProps;
    rbOption?: AffixContainerItemProps;
    centerOption?: AffixContainerItemProps;
    lcOption?: AffixContainerItemProps;
    rcOption?: AffixContainerItemProps;
    tcOption?: AffixContainerItemProps;
    bcOption?: AffixContainerItemProps;
    /** 自定义位置 */
    customOption?: AffixContainerItemProps;
    /** 是否禁用 */
    disabled?: boolean;
    onClick?: (e: any) => void;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
};
declare const AffixContainer: React.FC<AffixContainerProps>;
export default AffixContainer;
