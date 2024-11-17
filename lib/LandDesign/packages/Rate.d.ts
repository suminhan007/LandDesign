import { default as React, CSSProperties } from 'react';
export type RateProps = {
    step?: number;
    desc?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
};
declare const Rate: React.FC<RateProps>;
export default Rate;
