import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components';
import { CommonProps } from './types';
import { insertNewlines } from './hooks/insertNewlines';

type HighlightOnlyWrapTextareaProps = {
  text?: string;
  highlightStr?: string[];
  /** 输入框宽度 */
  width?: number | string;
  onChange?: (val: string, e) => void;
} & CommonProps;

const HighlightOnlyWrapTextarea: React.FC<HighlightOnlyWrapTextareaProps> = ({
  text,
  highlightStr = [],
  width = '100%',
  onChange,
  style,
  className = '',
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState<string>(text);
  useEffect(() => {
    if (text !== value) {
      setValue(text)
    }
  }, [text])

  function processArray(arr: string[]) {
    const allResults: string[] = [];
    arr.forEach(str => {
      allResults.push(...insertNewlines(str));
    });
    return allResults;
  }

  const getHighlightText = function (value: string, highlightStr: string[]) {
    const result: { type: 'default' | 'highlight', msg: string }[] = [];
    let start = 0;
    highlightStr.forEach(keyword => {
      let index = value.indexOf(keyword, start);
      if (index !== -1) {
        if (start < index) {
          result.push({ type: 'default', msg: value.substring(start, index) });
        }
        result.push({ type: 'highlight', msg: keyword });
        start = index + keyword?.length;
      }
    });

    if (start < value?.length) {
      result.push({ type: 'default', msg: value.substring(start) });
    }
    return result;
  }

  const highList = useMemo(() => {
    const newHighlightStr = processArray(highlightStr);
    const result = getHighlightText(value, newHighlightStr);
    const newResult = result.map(i => i.msg?.includes('\n') ? Object.assign(i, { msg: i.msg.split('\n').map((j, jdx) => jdx > 0 ? <><br />{j}</> : <>{j}</>) }) : i);
    return newResult
  }, [value, highlightStr]);

  const [editable, setEditable] = useState<boolean>(false);

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    const oldValue = value;
    // 只可以添加或删除换行符
    if (newValue.replace(/\n/g, '') === oldValue.replace(/\n/g, '') && !/(\n{2,})/.test(newValue) && !newValue.endsWith('\n') && !newValue.startsWith('\n')) {
      setValue(newValue);
      onChange?.(newValue, e);
    }
  }, []);

  useEffect(() => {
    if (!textareaRef.current) return;
    if (!value?.includes('\n')) {
      textareaRef.current.style.height = '22px';
    } else {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);


  // 首尾不聚焦
  const handleTextareaClick = useCallback((e) => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;
    const clickPosition = textarea.selectionStart;
    if (clickPosition > 0 && clickPosition < value?.length) {
      setEditable(true);
    } else {
      setEditable(false);
      e.preventDefault();
    }
  }, []);
  return (
    <StyledHighlightOnlyWrapTextarea className={`land-highlight-only-wrap-textarea ${className}`} style={style} width={typeof width === 'number' ? `${width}px` : width}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onFocus={e => e.preventDefault()}
        onClick={handleTextareaClick}
        className={`${editable ? 'editable' : ''}`}
      />
      <div className='land-highlight-only-wrap-textarea-mask-text'>{highList?.map(i => (i.type === 'default' ? i.msg : <span className="highlight-text">{i.msg}</span>))}</div>
    </StyledHighlightOnlyWrapTextarea>
  )
}

const StyledHighlightOnlyWrapTextarea = styled.div<{
  width?: string;
}>`
  &.land-highlight-only-wrap-textarea{
    position: relative;
    width: ${props => props.width};
    textarea{
      width: 100%;
      height: auto;
      padding: 0;
      margin: 0;
      font-size: 14px;
      line-height: 22px;
      -webkit-text-fill-color: transparent;
      opacity: 0;
      resize: none;
      appearance: none;
      border: none;
      outline: none;
        &.editable{
        opacity: 1;
      }
      &:focus,
      &:focus-within,
      &:focus-visible,
      &:active{
        border: none;
        outline: none;
      }
    }
    .land-highlight-only-wrap-textarea-mask-text{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: var(--color-text-2);
      font-size: 14px;
      line-height: 22px;
      pointer-events: none;
      .highlight-text{
        background-color: var(--color-primary-2);
      }
    }
  }
`;

export default HighlightOnlyWrapTextarea;
