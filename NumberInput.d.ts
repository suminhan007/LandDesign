import React, { CSSProperties } from 'react';
export type NumberInputProps = {
    background?: boolean;
    value: string;
    percentage?: boolean;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
};
declare const TaccNumberInput: React.FC<NumberInputProps>;
export default TaccNumberInput;
