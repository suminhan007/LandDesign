import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Input, { InputProps } from "./Input";

export type TagInputProps = {
  /** 初始标签 */
  tagData?: string[];
  /** 占位符 */
  placeholder?: string;
  w?: number | string;
  /** 允许输入的最大标签数 */
  maxLength?: number;
  /** 高亮文字数组 */
  highlightStr?: string[];
  /** 高亮内容样式 */
  highlightStyle?: CSSProperties;
  onChange?: (val: string[], e: any) => void;
  onEnter?: (val: string[], e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (val: string[], e: any) => void;
  /** 标签样式 */
  tagStyle?: CSSProperties;
  tagClassName?: string;
  className?: string;
  style?: CSSProperties;
} & InputProps;

const TagInput: React.FC<TagInputProps> = ({
  tagData = [],
  placeholder = '按下回车以输入标签',
  w = '100%',
  maxLength = 5,
  highlightStr = [],
  highlightStyle = { background: 'var(--color-primary-2)', color: 'var(--color-primary-6)' },
  onChange,
  onEnter,
  onFocus,
  onBlur,
  tagStyle,
  tagClassName = '',
  className = '',
  wrapStyle,
  ...restProps
}) => {
  const [newValue, setNewValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>(tagData);
  const addTag = (val: string) => {
    if (tags.length === maxLength || !val) return;
    setTags([...tags, val]);
    setNewValue('');
  };
  /** 监听键盘删除事件 */
  useEffect(() => {
    const handleKeyDelete = (e: any) => {
      if (e.code === 'Backspace' && tags?.length > 0 && !newValue) {
        setTags(tags => tags.slice(0, -1));
        console.log(e.code);
      }
    }
    document.body.addEventListener("keydown", handleKeyDelete);
    return () => document.body.removeEventListener("keydown", handleKeyDelete);
  }, [newValue, tags]);

  /** 编辑标签 */

  return (
    <StyleTagInputWrap
      className={`land-tagInput ${className}`}
      style={{ width: typeof w === "number" ? `${w}px` : w, ...wrapStyle }}
    >
      <div className="flex-1 flex flex-wrap gap-4 w-fit-content shrink-0">
        {tags?.map((item, index) => <StyledInputTag
          key={index}
          className={`land-tagInput-tag ${tagClassName}`}
          style={tagStyle}
        >
          {item}<Icon name="clear" onClick={() => setTags(tags.filter(itm => itm !== item))} />
        </StyledInputTag>)}
        <Input
          type="transparent"
          value={newValue}
          placeholder={placeholder}
          onEnter={(val, e) => { addTag?.(val); onEnter?.(tags, e); }}
          onBlur={e => { addTag?.(newValue); onBlur?.(tags, e) }}
          onChange={(val, e) => { setNewValue(val); onChange?.(tags, e) }}
          className="flex-1"
          wrapStyle={{ height: '28px', minWidth: '80px' }}
          {...restProps}
        />
      </div>
      <div className="land-tagInput-number">
        {<Icon name="error-fill" className="land-input-clear-icon" fill="var(--color-text-5)"
          onClick={() => {
            setTags([])
          }} />}
        <div><span>{tags.length}</span>/{maxLength}</div>
      </div>
    </StyleTagInputWrap>
  );
};

const StyleTagInputWrap = styled.div`
    position: relative;
    display: flex;
    align-items: end;
    gap: var(--gap-4);
    padding: 4px 12px;
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
    

    .land-tagInput-number{
      display: flex;
      align-items: center;
      gap: var(--gap-8);
      height: 28px;
      font-size: 14px;
      color: var(--color-text-5);
      span{
        color: var(--color-text-3);
    }
  }
`;

const StyledInputTag = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    padding: 0 8px;
    height: 28px;
    background-color: var(--color-bg-white);
    border-radius: var(--radius-2);
    color: var(--color-text-2);
    font-size: var(--font-content-small);
    border: var(--border-1) solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
`;

export default TagInput;
