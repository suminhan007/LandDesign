import React, { CSSProperties } from 'react';
import './style.scss';
export type ButtonProps = {
    style?: CSSProperties;
    className?: string;
    children?: React.ReactNode;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'link' | 'text';
    size?: 'large' | 'medium' | 'small';
    round?: boolean;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
};
declare function Button(props: ButtonProps): JSX.Element;
declare namespace Button {
    var defaultProps: {
        style: string;
        className: string;
        children: null;
        type: string;
        size: string;
        round: boolean;
        icon: string;
        loading: boolean;
        disabled: boolean;
        onClick: () => void;
    };
}
export default Button;
