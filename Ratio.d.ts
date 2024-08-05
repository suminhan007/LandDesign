import React from "react";
type CheckItemType = {
    value: number;
    label: string;
    pop?: string;
};
export type RatioProps = {
    checked?: number;
    data?: CheckItemType[];
    onChange?: (data: CheckItemType) => void;
};
declare const Ratio: React.FC<RatioProps>;
export default Ratio;
