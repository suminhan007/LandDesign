import { default as React, CSSProperties } from 'react';
export type TableProps = {
    titleData?: {
        title: string | React.ReactNode;
        value: string;
        antiDesc?: string;
    }[];
    data?: any[];
    style?: CSSProperties;
    className?: string;
};
declare const Table: React.FC<TableProps>;
export default Table;
