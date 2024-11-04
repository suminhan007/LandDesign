import React, { CSSProperties } from "react";
type CheckItemType = {
    value: number | string;
    label: string;
    info?: string;
    disabled?: boolean;
};
export type RadioProps = {
    checked?: number | string;
    data?: CheckItemType[];
    onChange?: (item: CheckItemType) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Radio: React.FC<RadioProps>;
export default Radio;
