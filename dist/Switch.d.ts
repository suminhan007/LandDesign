import React, { CSSProperties } from "react";
import { PopProps } from "./Pop";
export type SwitchProps = {
    checked?: boolean;
    label?: string;
    checkedLabel?: string;
    info?: React.ReactNode;
    popProps?: PopProps;
    onChange?: (checked: boolean) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Switch: React.FC<SwitchProps>;
export default Switch;
