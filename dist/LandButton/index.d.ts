import React, { CSSProperties } from 'react';
export type LandButtonProps = {
    text?: string;
    icon?: React.ReactNode;
    type?: 'default' | 'primary' | 'disabled' | 'default-stroke' | 'primary-stroke' | 'disabled-stroke';
    width?: number | string;
    onClick?: () => void;
    style?: CSSProperties;
    className?: string;
};
declare const LandButton: React.FC<LandButtonProps>;
export default LandButton;
