import React, { CSSProperties } from "react";
type CheckItemType = {
    value: number | string;
    label: string;
    info?: string;
    disabled?: boolean;
};
export type CheckboxProps = {
    checked?: (number | string)[];
    data?: CheckItemType[];
    onChange?: (item: CheckItemType) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
