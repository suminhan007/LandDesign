import React, { CSSProperties } from "react";
import styled from "styled-components";

export type DatePickerProps = {
  type?: "border" | "background";
  disabled?: boolean;
  onChange?: (e: any) => void;
  style?: CSSProperties;
  className?: string;
  [key: string]: any;
};

const DatePicker: React.FC<DatePickerProps> = ({
  type = "border",
  disabled,
  onChange,
  style,
  className = "",
  ...restProps
}) => {
  return (
    <StyledDatePicker
      className={`land-datePicker-wrap ${
        disabled ? "disabled" : ""
      } ${type} ${className}`}
      style={style}
    >
      <input
        type="date"
        onChange={(e) => {
          e.stopPropagation();
          onChange?.(e);
        }}
        {...restProps}
      />
    </StyledDatePicker>
  );
};

const StyledDatePicker = styled.a<{

}>`
  padding: 0 12px;
  border-radius: var(--radius-6);
  transition: background-color var(--transition-15) linear;
  input{
    height: 36px;
    background-color: transparent;
    border: none;
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active{
      outline: 0px;
    }
  }
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    cursor: not-allowed;
  }
`;

export default DatePicker;
