import { default as React, CSSProperties } from 'react';
import { PopProps } from './Pop';
export type SwitchProps = {
    /** 是否开启 */
    checked?: boolean;
    /** 秒数文字 */
    label?: string;
    /** 开启后的描述文字 */
    checkedLabel?: string;
    /** 默认图标 */
    icon?: React.ReactNode;
    /** 开启后的图标 */
    checkedIcon?: React.ReactNode;
    /** 整体提示内容 */
    info?: React.ReactNode;
    /** 图标提示内容 */
    iconInfo?: React.ReactNode;
    /** 提示内容属性 */
    popProps?: PopProps;
    /** 暗黑模式 */
    dark?: boolean;
    /** 禁用 */
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Switch: React.FC<SwitchProps>;
export default Switch;
