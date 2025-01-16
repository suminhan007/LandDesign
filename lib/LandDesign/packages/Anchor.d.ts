import { default as React, CSSProperties } from 'react';
export type AnchorItemType = {
    key?: string;
    href?: string;
    title?: string;
};
export type AnchorProps = {
    data?: AnchorItemType[];
    style?: CSSProperties;
    className?: string;
};
declare const Anchor: React.FC<AnchorProps>;
export default Anchor;
