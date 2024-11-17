import { default as React, CSSProperties } from 'react';
export type DatePickerProps = {
    type?: "border" | "background";
    disabled?: boolean;
    onChange?: (e: any) => void;
    style?: CSSProperties;
    className?: string;
    [key: string]: any;
};
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
