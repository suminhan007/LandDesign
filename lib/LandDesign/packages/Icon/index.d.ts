import { CommonProps } from '../types';
export type IconProps = {
    fill?: string;
    stroke?: string;
    size?: number;
    strokeWidth?: number;
    onClick?: (e: any) => void;
    [key: string]: any;
} & CommonProps;
export type IconDefaultProps = {
    name: string;
} & IconProps;
declare const Icon: React.FC<IconDefaultProps>;
export default Icon;
