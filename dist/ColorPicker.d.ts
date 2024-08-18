import React, { CSSProperties } from "react";
export type ColorPickerProps = {
    value?: string;
    /** 尺寸 */
    size?: string | number;
    /** 是否有border */
    border?: boolean;
    /** 是否可选颜色 */
    useSelect?: boolean;
    onChange?: (color: string, e: any) => void;
    onClick?: (color: string) => void;
    onCardClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};
declare const ColorPicker: React.FC<ColorPickerProps>;
export default ColorPicker;
