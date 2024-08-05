import React from 'react';
import { ButtonProps } from './Button';
export type CheckBarProps = {
    checked?: number | number[];
    data?: ({
        value: number;
    } & ButtonProps)[];
};
declare const CheckBar: React.FC<CheckBarProps>;
export default CheckBar;
