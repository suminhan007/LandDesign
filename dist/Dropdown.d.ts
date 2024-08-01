import React, { CSSProperties } from "react";
type DropDownItemType = {
    id: string;
    laebl: string | React.ReactNode;
};
type DropDownProps = {
    dropData?: DropDownItemType[];
    toggle?: string | React.ReactNode;
    placement?: "left" | "right" | "center";
    onChange?: (data: DropDownItemType) => void;
    toggleClassName?: string;
    toggleStyle?: CSSProperties;
    dropClassName?: string;
    dropStyle?: CSSProperties;
};
declare const DropDown: React.FC<DropDownProps>;
export default DropDown;
