import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Divider from "./Divider";
import useGetHighlightStr from "./hooks/useGetHighlightStr";

export type InputProps = {
  type?: 'border' | 'background';
  /** 输入值 */
  value?: string;
  /** 输入类型 */
  inputType?: string;
  /** 占位符 */
  placeholder?: string;
  /** 前置内容 */
  prefix?: React.ReactNode;
  /** 后置内容：单位 */
  suffix?: React.ReactNode;
  /** 是否有搜索按钮 */
  useSearch?: boolean;
  width?: number | string;
  /** 允许输入的最大字符数 */
  maxLength?: number;
  /** 是否显示字数 */
  showNumber?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 高亮文字数组 */
  highlightStr?: string[];
  /** 高亮内容样式 */
  highlightStyle?: CSSProperties;
  onChange?: (val: string, e?: any) => void;
  onBlur?: (e: any) => void;
  /** 清除 */
  onClear?: () => void;
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
  suffix,
  useSearch = false,
  width,
  maxLength,
  disabled,
  highlightStr = [],
  highlightStyle = { background: 'var(--color-primary-2)', color: 'var(--color-primary-6)' },
  onChange,
  onBlur,
  onClear,
  className = '',
  wrapStyle,
  ...restProps
}) => {
  const InputLabelRef = useRef<HTMLDivElement>(null);
  const prefixRef = useRef<HTMLDivElement>(null);
  const [suffixLeft, setSuffixLeft] = useState<number>(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuffixLeft(Number(prefixRef.current?.clientWidth) + Number(InputLabelRef.current?.clientWidth) + 8);
    }, 100);
    return () => clearTimeout(timer);
  }, [value, prefix]);

  const highStringList = useMemo(() => useGetHighlightStr(String(value), highlightStr), [value, highlightStr]);
  /** 控制高两层左右滚动 */
  const inputRef = useRef<HTMLInputElement>(null);
  /* 左右滚动 */
  const ScrollLabel = useCallback(() => {
    if (!InputLabelRef.current || !inputRef.current) return;
    InputLabelRef.current.scrollLeft = inputRef.current.scrollLeft;
  }, []);
  const handleBlur = useCallback((e) => {
    if (InputLabelRef.current) InputLabelRef.current.scrollLeft = 0;
    onBlur?.(e);
  }, []);
  return (
    <StyleInputWrap
      className={`land-input ${disabled ? 'disabled' : ''} ${onClear ? 'clear' : ''} ${type} ${className}`}
      style={{ width: typeof width === "number" ? `${width}px` : width, ...wrapStyle }}
    >
      {useSearch && <Icon name="search" stroke="var(--color-text-5)" />}
      {prefix && <div ref={prefixRef} className="input-prefix">
        {prefix}
        <Divider direction="column" lang="16px" margin={8} />
      </div>}
      <input
        ref={inputRef}
        placeholder={placeholder}
        type={inputType}
        value={value}
        max={maxLength}
        onClick={(e) => e.stopPropagation()}
        onBlur={handleBlur}
        onChange={(e) => { ScrollLabel?.(); onChange?.(e.target.value, e); }}
        onScroll={ScrollLabel}
        {...restProps}
      />
      {value ? <div ref={InputLabelRef} className="input-label">
        {
          highStringList?.map((item, idx) => {
            if (item.type === 'default') return item.msg;
            return <span style={highlightStyle} key={item.msg + idx}>{item.msg}</span>;
          })
        }
      </div> : <p className="input-placeholder">{placeholder}</p>}
      {suffix && value && <p className="input-suffix" style={{ transform: `translateX(${suffixLeft}px)` }}>{suffix}</p>}
      {(Boolean(value) && onClear) && <Icon name="error-fill" className="land-input-clear-icon" fill="var(--color-text-5)" onClick={onClear} />}
    </StyleInputWrap>
  );
};


const StyleInputWrap = styled.div`
  position: relative;
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
  &.clear{
    padding-right: 40px;
  }
  
  &.clear .input-label{
    width: calc(100% - 40px); 
  }
  
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    font-size: 14px;
    caret-color: var(--color-primary-6);
    -webkit-text-fill-color: transparent;
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent;
      -webkit-text-fill-color: transparent;
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
  .land-input-clear-icon{
    position: absolute;
    top: 50%;
    right: 12px;
    opacity: 1;
    transform: translateY(-50%);
    flex-shrink: 0;
    transition: opacity 0.2s linear;
  }
  .input-prefix{
    display: flex;
    align-items: center;
    color: var(--color-text-5);
    white-space: nowrap;
    font-size: 14px;
  }
  .input-label{
    position: absolute;
    left: 0;
    padding-left: 12px;
    width: calc(100% - 12px);
    box-sizing: border-box;
    color: var(--color-text-2);
    font-size: 14px;
    white-space: nowrap;
    overflow: scroll;
    &::-webkit-scrollbar{
    width: 0;
    display: none;
  }
  }
  .input-placeholder,
  .input-suffix{
    position: absolute;
    left: 12px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--color-text-5);
    pointer-events: none;
  }
  .input-placeholder{
    font-size: 14px;
  }
  &:hover{
    .land-input-clear-icon{
      opacity: 1;
    }
  }
`;
export default Input;
