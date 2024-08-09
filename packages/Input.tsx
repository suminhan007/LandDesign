import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export type InputProps = {
  type?: 'border' | 'background';
  /** 输入值 */
  value?: string | number;
  /** 输入类型 */
  inputType?: string;
  /** 占位符 */
  placeholder?: string;
  /** 前置内容 */
  prefix?: React.ReactNode;
  /** 是否有搜索按钮 */
  useSearch?: boolean;
  width?: number | string;
  /** 允许输入的最大字符数 */
  maxLength?: number;
  /** 是否显示字数 */
  showNumber?: boolean;
  /** 是否使用清除按钮 */
  showClear?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  onChange?: (val: string | number, e: any) => void;
  onFocus?: (e: any) => void;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};
const Input: React.FC<InputProps> = ({
  type = 'border',
  value,
  inputType = 'text',
  placeholder = '请输入',
  prefix,
  useSearch = false,
  width,
  maxLength,
  showClear = true,
  disabled,
  onChange,
  onFocus,
  className,
  wrapStyle,
  ...restProps
}) => {
  const [newValue, setNewValue] = useState<string | number>(value);
  useEffect(() => setNewValue(value), [value]);
  return (
    <StyleInputWrap
      className={`land-input ${disabled ? 'disabled' : ''} ${type} ${className}`}
      style={{ width: typeof width === "number" ? `${width}px` : width, ...wrapStyle }}
    >
      {useSearch && <Icon name="search" stroke="var(--color-text-5)" />}
      {prefix && <p className="input-prefix">{prefix}</p>}
      <input
        placeholder={placeholder}
        type={inputType}
        value={newValue}
        max={maxLength}
        onClick={(e) => e.stopPropagation()}
        onFocus={(e: any) => { e.stopPropagation(); onFocus?.(e) }}
        onChange={(e) => { e.stopPropagation(); onChange?.(e.target.value, e); }}
        {...restProps}
      />
      {(Boolean(newValue) && showClear) && <Icon name="error-fill" className="land-input-clear-icon" fill="var(--color-text-5)" onClick={() => setNewValue('')} />}
    </StyleInputWrap>
  );
};


const StyleInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  height: 36px;
  border-radius: var(--radius-4);
  transition: background-color var(--transition-15) linear;
  box-sizing: border-box;
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
    background-color: var(--color-bg-1);
    cursor: not-allowed;
    pointer-events: none;
    input{
      opacity: var(--opacity-68);
      cursor: not-allowed;
      &::placeholder{
        opacity: var(--opacity-68);
      }
    }
  }
  
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    caret-color: var(--color-primary-6);
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    &::placeholder {
      color: var(--color-text-5);
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
  .land-input-clear-icon{
    width: 0px;
    flex-shrink: 0;
  }
  &:hover{
    .land-input-clear-icon{
      width: 16px;
    }
  }
`;
export default Input;
