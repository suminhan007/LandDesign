import React, { CSSProperties } from 'react';
export type NumberInputProps = {
    value?: number;
    type?: 'border' | 'background';
    step?: number;
    min?: number;
    max?: number;
    suffix?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    onChange?: (event: any, value: number) => void;
    [key: string]: any;
};
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
