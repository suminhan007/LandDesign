import { default as React, CSSProperties } from 'react';
export type TagProps = {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    canDelete?: boolean;
    color?: string;
    border?: string;
    background?: string;
    onDelete?: (e: any) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Tag: React.FC<TagProps>;
export default Tag;
