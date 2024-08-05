import React, { CSSProperties } from 'react';
declare enum PopType {
    BG = "background",
    BORDER = "border"
}
export type PopProps = {
    type?: PopType;
    theme?: "light" | "dark";
    content?: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
    style?: CSSProperties;
    className?: string;
};
declare const Pop: React.FC<PopProps>;
export default Pop;
