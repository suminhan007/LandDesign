import React, { CSSProperties } from "react";
type ColorProps = {
    value?: string;
    size?: string | number;
    showDrop?: boolean;
    showList?: boolean;
    showOpacity?: boolean;
    input?: string | React.ReactNode | boolean;
    pop?: string | React.ReactNode;
    active?: boolean;
    onChange?: (color: string) => void;
    onClick?: (color: string) => void;
    onCardClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};
declare const ColorPicker: React.FC<ColorProps>;
export default ColorPicker;
