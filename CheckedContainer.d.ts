import React from "react";
export type CheckedContainerProps = {
    checked?: boolean;
    gap?: number;
    strokeWidth?: number;
    radius?: number;
    children?: React.ReactNode;
};
declare const CheckedContainer: React.FC<CheckedContainerProps>;
export default CheckedContainer;
