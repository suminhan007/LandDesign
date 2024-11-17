import { default as React, CSSProperties } from 'react';
export type AutoMediaProps = {
    type?: "img" | "video";
    url?: string;
    className?: string;
    style?: CSSProperties;
    wrapClassName?: string;
    onChange?: (w: number, h: number) => void;
};
declare const AutoMedia: React.FC<AutoMediaProps>;
export default AutoMedia;
