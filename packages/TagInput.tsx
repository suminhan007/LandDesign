import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export type TagInputProps = {
  /** 输入值 */
  value?: string;
  /** 占位符 */
  placeholder?: string;
  w?: number | string;
  /** 允许输入的最大标签数 */
  maxLength?: number;
  onChange?: (val: string | number, e: any) => void;
  onFocus?: (e: any) => void;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};
const TagInput: React.FC<TagInputProps> = ({
  value,
  placeholder = '请输入',
  w = '100%',
  maxLength,
  onChange,
  onFocus,
  className,
  wrapStyle,
  ...restProps
}) => {
  const [newValue, setNewValue] = useState<string>(value);
  const [tags, setTags] = useState<string[]>([]);

  const tagListRef = useRef<HTMLDivElement>(null);
  const handleInputEnter = (e) => {
    if (tags?.length === maxLength) return;
    if (e.code === 'Enter' && newValue) {
      if (tags.length === maxLength) return;
      setTags([...tags, newValue]);
      setNewValue('');
    }
  }
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  useEffect(() => {
    if (tagListRef.current && tags && tags?.length > 0) {
      const top = tagListRef.current.clientHeight;
      const length = tags.length - 1;
      const left = tagListRef.current.children[length].clientLeft + tagListRef.current.children[length].clientWidth + 16 * tags.length;
      setTop(top);
      setLeft(left);
    }
  }, [tags])
  return (
    <StyleTagInputWrap
      className={`land-tagInput ${className}`}
      style={{ width: typeof w === "number" ? `${w}px` : w, ...wrapStyle }}
    >
      <div ref={tagListRef} className="absolute top-0 left-0 flex flex-wrap gap-4 w-fit-content shrink-0" style={{ maxWidth: '100%' }}>
        {tags?.map((item, index) => <StyledInputTag key={index}>{item}<Icon name="clear" onClick={() => setTags(tags.filter(itm => itm !== item))} /></StyledInputTag>)}
      </div>
      <textarea
        placeholder={placeholder}
        value={newValue}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => handleInputEnter(e)}
        onFocus={(e: any) => { e.stopPropagation(); onFocus?.(e) }}
        onChange={(e) => { e.stopPropagation(); setNewValue(e.target.value); onChange?.(e.target.value, e); }}
        style={{
          paddingTop: top,
          textIndent: left,
        }}
        {...restProps}
      />
      {newValue && <Icon name="clear" fill="var(--color-bg-3)" className='shrink-0' onClick={() => setNewValue('')} />}
      <div className="land-tagInput-number"><span>{tags.length}</span> / {maxLength}</div>
    </StyleTagInputWrap>
  );
};

const StyleTagInputWrap = styled.div`
        position: relative;
        display: flex;
        align-items: baseline;
        gap: var(--gap-4);
        padding: 0 4px;
        height: fit-content;
        border-radius: var(--radius-4);
        background-color: var(--color-bg-2);
        overflow: auto;
        transition: background-color var(--transition-15) linear;
        &::-webkit-scrollbar{
          width: 0;
          display: none;
        }
        &:focus-within,
        &:hover{
          background-color: var(--color-bg-3);
        }
        textarea {
          flex: 1;
          height: fit-content;
          background-color: transparent;
          appearance: none;
          -moz-appearance: none;
          border: none;
          outline: none;
          caret-color: var(--color-primary-6);
          flex-shrink: 0;
          overflow: auto;
          resize: none;
        &::-webkit-scrollbar{
          width: 0;
          display: none;
        }
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
    .land-tagInput-number{
      font-size: var(--font-content-small);
      color: var(--color-text-5);
      span{
        color: var(--color-text-3);
      }
    }
  }
        `;

const StyledInputTag = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-8);
    padding: var(--padding-small);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-2);
    color: var(--color-text-2);
    font-size: var(--font-content-small);
    border: var(--border-1) solid var(--color-border-2);
    cursor: pointer;
        `
export default TagInput;
