import { default as React, CSSProperties } from 'react';
type CheckItemType = {
    value: number | string;
    label: string;
    /** 整个选项提示内容 */
    info?: React.ReactNode;
    disabled?: boolean;
    /** 图标提示内容 */
    iconInfo?: React.ReactNode;
};
export type RadioProps = {
    checked?: number | string;
    data?: CheckItemType[];
    onChange?: (item: CheckItemType) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Radio: React.FC<RadioProps>;
export default Radio;
