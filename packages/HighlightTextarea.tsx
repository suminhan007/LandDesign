import React, { useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components';
import { CommonProps } from './types';
import { insertNewlines } from './hooks/insertNewlines';

type HighlightTextareaProps = {
  value?: string;
  highlightStr?: string[];
  /** 输入框宽度 */
  width?: number | string;
  onChange?: (val: string, e) => void;
} & CommonProps;

const HighlightTextarea: React.FC<HighlightTextareaProps> = ({
  value,
  highlightStr = [],
  width = '100%',
  onChange,
  style,
  className = '',
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        start = index + keyword.length;
      }
    });

    if (start < value.length) {
      result.push({ type: 'default', msg: value.substring(start) });
    }
    return result;
  }
  function processArray(arr: string[]) {
    const allResults: string[] = [];
    arr.forEach(str => {
      allResults.push(...insertNewlines(str));
    });
    return allResults;
  }

  const highList = useMemo(() => {
    const newHighlightList = processArray(highlightStr);
    const result = getHighlightText(value, newHighlightList);
    const newResult = result.map(i => i.msg?.includes('\n') ? Object.assign(i, { msg: i.msg.split('\n').map((j, jdx) => jdx > 0 ? <><br />{j}</> : <>{j}</>) }) : i);
    return newResult
  }, [value, highlightStr]);

  useEffect(() => {
    if (!textareaRef.current) return;
    if (!value?.includes('\n')) {
      textareaRef.current.style.height = '22px';
    } else {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <StyledHighlightOnlyWrapTextarea className={`land-highlight-only-wrap-textarea ${className}`} style={style} width={typeof width === 'number' ? `${width}px` : width}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => onChange?.(e.target.value, e)}
        onFocus={e => e.preventDefault()}
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
      max-height: inherit;
      padding: 0;
      margin: 0;
      font-size: 14px;
      line-height: 22px;
      -webkit-text-fill-color: transparent;
      resize: none;
      appearance: none;
      border: none;
      outline: none;
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
      max-height: inherit;
      overflow: auto;
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

export default HighlightTextarea;
