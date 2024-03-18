import React, { CSSProperties } from "react";
import styled from "styled-components";

export type DatePickerProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const DatePicker: React.FC<DatePickerProps> = ({ children, style, className }) => {
  return <StyledDatePicker className={className} style={style}>{children}</StyledDatePicker>;
};

const StyledDatePicker = styled.a<{

}>`
`;

export default DatePicker;
