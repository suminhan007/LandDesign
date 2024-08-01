import React, { CSSProperties } from 'react';
export type TaccSelectProps = {
    background?: boolean;
    value: string;
    percentage?: boolean;
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
};
declare const TaccNumberInput: React.FC<TaccSelectProps>;
export default TaccNumberInput;
