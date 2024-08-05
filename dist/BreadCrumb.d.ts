import React, { CSSProperties } from "react";
export type BreadCrumbItemType = {
    key: number | string;
    label: React.ReactNode;
    tip?: string;
    maxWidth?: number;
};
export type BreadCrumbProps = {
    data?: BreadCrumbItemType[];
    onChange?: (item: BreadCrumbItemType) => void;
    style?: CSSProperties;
    className?: string;
};
declare const BreadCrumb: React.FC<BreadCrumbProps>;
export default BreadCrumb;
