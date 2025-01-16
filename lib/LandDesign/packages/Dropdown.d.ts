import { default as React, CSSProperties } from 'react';
type DropdownItemType = {
    key: string;
    label: string | React.ReactNode;
};
export type DropdownProps = {
    dropData?: DropdownItemType[];
    dropContent?: React.ReactNode;
    toggle: React.ReactNode;
    placement?: "left" | "right" | "center";
    onChange?: (data: DropdownItemType) => void;
    toggleClassName?: string;
    toggleStyle?: CSSProperties;
    dropClassName?: string;
    dropStyle?: CSSProperties;
};
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
