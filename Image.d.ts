import React, { CSSProperties } from "react";
export type ImageProps = {
    url?: string;
    className?: string;
    imgClassName?: string;
    style?: CSSProperties;
    imgStyle?: CSSProperties;
    ratio?: number;
};
declare const Image: React.FC<ImageProps>;
export default Image;
