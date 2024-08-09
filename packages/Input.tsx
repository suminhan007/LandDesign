import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export type InputProps = {
  type?: 'border' | 'background';
  /** 输入值 */
  value?: string;
  /** 占位符 */
  placeholder?: string;
  /** 前置内容 */
  prefix?: React.ReactNode;
  /** 是否有搜索按钮 */
  useSearch?: boolean;
  w?: number | string;
  /** 允许输入的最大字符数 */
  maxLength?: number;
  onChange?: (val: string | number, e: any) => void;
  onFocus?: (e: any) => void;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};
const Input: React.FC<InputProps> = ({
  type = 'border',
  value,
  placeholder = '请输入',
  prefix,
  useSearch = false,
  w,
  maxLength,
  onChange,
  onFocus,
  className,
  wrapStyle,
  ...restProps
}) => {
  const [newValue, setNewValue] = useState<string>(value);
  return (
    <StyleInputWrap
      className={`land-input ${type} ${className}`}
      style={{ width: typeof w === "number" ? `${w}px` : w, ...wrapStyle }}
    >
      {useSearch && <Icon name="search" stroke="var(--color-text-5)" />}
      {prefix && <p className="input-prefix">{prefix}</p>}
      <input
        placeholder={placeholder}
        type='text'
        value={newValue}
        max={maxLength}
        onClick={(e) => e.stopPropagation()}
        onFocus={(e: any) => { e.stopPropagation(); onFocus?.(e) }}
        onChange={(e) => { e.stopPropagation(); onChange?.(e.target.value, e); }}
        {...restProps}
      />
      {newValue && <Icon name="error-fill" className="land-input-clear-icon" fill="var(--color-text-5)" onClick={() => setNewValue('')} />}
    </StyleInputWrap>
  );
};

const StyleInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  border-radius: var(--radius-4);
  transition: background-color var(--transition-15) linear;
  box-sizing: border-box;
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover{
    background-color: var(--color-bg-1);
    }
    &:active{
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover{
    background-color: var(--color-bg-2);
    }
    &:active{
      background-color: var(--color-bg-3);
    }
  }
  
  input {
    width: 100%;
    height: 34px;
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
  }
  &:hover{
    .land-input-clear-icon{
      width: 16px;
    }
  }
`;
export default Input;
