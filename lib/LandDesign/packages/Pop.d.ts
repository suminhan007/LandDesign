import { default as React, CSSProperties } from 'react';
declare enum PopType {
    BG = "background",
    BORDER = "border"
}
export type PopProps = {
    /** 是否直接显示 */
    show?: boolean;
    /** 样式 */
    type?: PopType;
    /** 颜色模式 */
    theme?: "light" | "dark";
    /** 气泡内容 */
    content?: React.ReactNode;
    /** 气泡位置 */
    placement?: "top" | "bottom" | "left" | "right";
    /** 是否隐藏气泡箭头 */
    hideArrow?: boolean;
    style?: CSSProperties;
    className?: string;
};
declare const Pop: React.FC<PopProps>;
export default Pop;
