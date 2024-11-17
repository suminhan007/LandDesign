import { default as React, CSSProperties } from 'react';
export type AnchorItemType = {
    key?: number | string;
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    title?: string;
    style?: CSSProperties;
    className?: string;
};
export type AnchorProps = {
    data?: AnchorItemType[];
    target?: boolean;
    /** 尺寸 */
    size?: number;
    style?: CSSProperties;
    className?: string;
};
declare const Anchor: React.FC<AnchorProps>;
export default Anchor;
