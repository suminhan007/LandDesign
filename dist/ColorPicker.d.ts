import React, { CSSProperties } from "react";
export type ColorPickerProps = {
    value?: string;
    /** 尺寸 */
    size?: string | number;
    /** 是否可选颜色 */
    useSelect?: boolean;
    /** 是否展示默认颜色列表 */
    showList?: boolean;
    defaultColorList?: (string[])[];
    /** 是否可控制透明度 */
    showOpacity?: boolean;
    /** 是否使用底部输入框 */
    input?: string | React.ReactNode | boolean;
    info?: React.ReactNode;
    active?: boolean;
    onChange?: (color: string) => void;
    onClick?: (color: string) => void;
    onCardClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};
declare const ColorPicker: React.FC<ColorPickerProps>;
export default ColorPicker;
