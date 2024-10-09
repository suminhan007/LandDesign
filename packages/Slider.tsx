import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Pop from './Pop';

export type SliderProps = {
  /** 是否需要背景分割线 */
  useDivider?: boolean;
  /** 是否需要前缀和后缀 */
  prefix?: string;
  suffix?: string;
  /** 是否需要气泡 */
  usePop?: boolean;
  popValue?: string;
  min?: number;
  max?: number;
  /** 调节步数 */
  step?: number;
  /** 输入值 */
  value?: number;
  onChange?: (val: number) => void;
  /** 控件高度 */
  height?: number;
  className?: string;
};
const Slider: React.FC<SliderProps> = ({
  prefix,
  suffix,
  useDivider = true,
  usePop = false,
  popValue,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  height = 36,
  onChange,
  className,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (!sliderRef.current || !usePop) return;
    const rect = sliderRef.current.getClientRects();
    if (rect?.length) {
      const { width } = rect[0];
      setWidth(width);
    }
  }, [sliderRef, usePop]);
  return (
    <div ref={sliderRef} className="flex items-center gap-8 width-100">
      {/* 最小值前缀:为0%或options第一项 */}
      {prefix && <div className="fs-12 color-gray-3">{prefix}</div>}
      <StyledSliderContent
        useDivider={useDivider}
        step={(100 * step) / (max - min)}
        className={`relative flex-1 p-2 radius-8 bg-gray hover:bg-gray transition-2s ${className ? className : ''}`}
        style={{ height: `${height}px` }}
      >
        {/* slider:为0或options第一项 */}
        <StyleInput
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={e => {
            onChange?.(Number(e.target.value));
          }}
          // 选中部分样式
          style={{
            background:
              value < (max - min) / 2
                ? `linear-gradient(to right,var(--od-light-color) calc(100% - 2px), var(--od-light-color)  calc(100% - 2px)) 0 0 / ${((value -
                  min) /
                  (max - min)) *
                100}% 100% no-repeat`
                : `linear-gradient(to right,var(--od-light-color) calc(100% - 2px), var(--od-light-color)  calc(100% - 2px)) 0 0 / ${((value -
                  min) /
                  (max - min)) *
                100}% 100% no-repeat`,
          }}
          className="width-100 radius-6 flex justify-center"
        />
        <Pop content={popValue} style={{ transform: `translateX(${(width * (value - (max - min) / 2)) / (max - min)}px)` }} />
      </StyledSliderContent>
      {/* 最大值后缀:为100%或options最后一项 */}
      {suffix && <div className="fs-12 color-gray-3">{suffix}</div>}
    </div>
  );
};

const StyledSliderContent = styled.div<{
  useDivider?: boolean;
  step?: number;
}>`
  &::before {
    content: '';
    display: block;
    margin-top: 4px;
    width: 100%;
    height: calc(100% - 8px);
    border-radius: 8px;
    background: ${props =>
    props.useDivider
      ? `linear-gradient(to right,transparent calc(100% - 1px), #F1F2F6  calc(100% - 1px),#F1F2F6 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), rgba(73, 90, 122, 0.12) calc(100% - 1px),rgba(73, 90, 122, 0.12) 100%) 0 0 / ${props.step}% 100%,#F1F2F6 0 0 / 100% 100%`
      : 'transparent'};
    transition: all 0.2s linear;
  }
  &:hover::before {
    background: ${props =>
    props.useDivider
      ? `linear-gradient(to right,transparent calc(100% - 1px), #E9EBEF  calc(100% - 1px),#E9EBEF 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), rgba(73, 90, 122, 0.12) calc(100% - 1px),rgba(73, 90, 122, 0.12) 100%) 0 0 / ${props.step}% 100%,#E9EBEF 0 0 / 100% 100%`
      : ''};
  }
`;

const StyleInput = styled.input`
  position: absolute;
  top: 2px;
  height: calc(100% - 4px);
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  &[type='range'] {
    width: calc(100% - 4px);
  }
  &::-webkit-slider-runnable-track {
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 100%;
    border-radius: 6px;
    background: var(--od-light-color);
    border: 1px solid rgba(73, 90, 122, 0.12);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
    transition: border-color linear 0.2s;
    &:hover {
      border-color: rgba(69, 80, 102, 0.25);
      cursor: ew-resize;
    }
  }
`;

export default Slider;
