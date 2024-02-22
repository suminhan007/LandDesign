import { CSSProperties } from 'react';
export type ButtonProps = {
    text?: string;
    style?: CSSProperties;
    className?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
