import React, { CSSProperties } from 'react';
export type LinkProps = {
    type?: 'primary' | 'success' | 'error' | 'wranning';
    status?: 'default' | 'actived' | 'disabled';
    pop?: React.ReactNode | string;
    children?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
};
declare const Link: React.FC<LinkProps>;
export default Link;
