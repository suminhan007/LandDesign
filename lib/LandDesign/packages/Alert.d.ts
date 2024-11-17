import { default as React } from 'react';
export type AlertProps = {
    type?: "default" | "error" | "fail" | "success" | "warn" | "loading";
    direction?: "row" | "column";
    title: React.ReactNode | string;
    link?: string;
    onLinkClick?: (e: any) => void;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
