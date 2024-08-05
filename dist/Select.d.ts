import React, { CSSProperties } from "react";
type SelectItemType = {
    id: string | number;
    value: string | number;
    disabled?: boolean;
};
export type SelectProps = {
    data?: SelectItemType[];
    placeholder?: string;
    selected?: string | number;
    width?: number | string;
    title?: string;
    info?: string | React.ReactNode;
    onChange?: (item: SelectItemType) => void;
    className?: string;
    style?: CSSProperties;
};
declare const Select: React.FC<SelectProps>;
export default Select;
