import { CSSProperties } from "react";
export type IconProps = {
    fill?: string;
    stroke?: string;
    size?: number;
    strokeWidth?: number;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
};
export declare const IconDec: React.FC<IconProps>;
export type IconDefaultProps = {
    name: string;
} & IconProps;
declare const Icon: React.FC<IconDefaultProps>;
export default Icon;
