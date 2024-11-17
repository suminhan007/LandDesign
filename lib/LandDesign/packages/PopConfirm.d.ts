import { default as React, CSSProperties } from 'react';
import { ButtonProps } from './Button';
declare enum PopConfirmType {
    BG = "background",
    BORDER = "border"
}
export type PopConfirmProps = {
    /** 是否直接显示 */
    show?: boolean;
    /** 样式 */
    type?: PopConfirmType;
    /** 颜色模式 */
    theme?: "light" | "dark";
    /** 气泡内容 */
    content?: React.ReactNode;
    /** 气泡位置 */
    placement?: "top" | "bottom" | "left" | "right";
    /** 是否隐藏气泡箭头 */
    hideArrow?: boolean;
    /** 取消按钮扩展属性 */
    cancelButtonProps?: ButtonProps;
    /** 确认按钮扩展属性 */
    submitButtonProps?: ButtonProps;
    /** 取消事件 */
    onCancel?: () => void;
    /** 确认事件 */
    onSubmit?: () => void;
    style?: CSSProperties;
    className?: string;
};
declare const PopConfirm: React.FC<PopConfirmProps>;
export default PopConfirm;
