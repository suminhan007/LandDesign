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
  /** 滑块大小 */
  thumbSize?: number;
  /** 定制样式 */
  defaultBg?: string;
  activeBg?: string;
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
  thumbSize = 16,
  defaultBg,
  activeBg = 'var(--color-primary-6)',
  className,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (!sliderRef.current) return;
    const { width } = sliderRef.current.getClientRects()[0];
    setWidth(width);
  }, []);
  return (
    <div ref={sliderRef} className="flex items-center gap-8 width-100">
      {/* 最小值前缀:为0%或options第一项 */}
      {prefix && <div className="fs-12 color-gray-3">{prefix}</div>}
      <StyledSliderContent
        useDivider={useDivider}
        step={100 / (max - min)}
        className={`relative flex-1 p-2 radius-8 ${defaultBg ? '' : 'bg-gray hover:bg-gray'} transition-2s hover-pop ${className ? className : ""
          }`}
        style={{
          height: `${height}px`,
          backgroundColor: defaultBg,
        }}
      >
        {/* slider:为0或options第一项 */}
        <StyleSliderInput
          type="range"
          value={value}
          min={0}
          max={max}
          step={step}
          onChange={(e) => {
            onChange?.(Number(e.target.value));
          }}
          // 选中部分样式
          style={{
            background:
              value < (max - min) / 2
                ? `linear-gradient(to right,${activeBg} calc(100% - 2px), ${activeBg}  calc(100% - 2px)) 0 0 / ${((value - min) / (max - min)) * 100
                }% 100% no-repeat`
                : `linear-gradient(to right,${activeBg} calc(100% - 2px), ${activeBg}  calc(100% - 2px)) 0 0 / ${((value - min) / (max - min)) * 100
                }% 100% no-repeat`,
          }}
          className="width-100 radius-6 flex justify-center"
          height={height}
          thumbSize={thumbSize}
        />
        {usePop && (
          <Pop
            content={popValue}
            style={{
              transform: `translateX(${(width * (value - (max - min) / 2)) / (max - min)
                }}px)`,
            }}
          />
        )}
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
    content: "";
    display: block;
    margin-top: 4px;
    width: 100%;
    height: calc(100% - 8px);
    border-radius: 8px;
    background: ${(props) =>
    props.useDivider
      ? `linear-gradient(to right,transparent calc(100% - 1px), var(--bg-gray-1)  calc(100% - 1px),var(--bg-gray-1) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / ${props.step}% 100%,var(--bg-gray-1) 0 0 / 100% 100%`
      : "transparent"};
    transition: all 0.2s linear;
  }
  &:hover::before {
    background: ${(props) =>
    props.useDivider
      ? `linear-gradient(to right,transparent calc(100% - 1px), var(--color-gray-2)  calc(100% - 1px),var(--color-gray-2) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / ${props.step}% 100%,var(--color-gray-2) 0 0 / 100% 100%`
      : ""};
  }
`;

const StyleSliderInput = styled.input<{
  height?: number;
  thumbSize?: number;
}>`
  position: absolute;
  top: ${props => props.height > 8 ? '2px' : '0px'};
  display: flex;
  align-items: center;
  height: ${props => props.height > 8 ? 'calc(100% - 4px)' : '100%'};
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  &[type="range"] {
    width: ${props => props.height > 8 ? 'calc(100% - 4px)' : '100%'};
  }
  &::-webkit-slider-runnable-track {
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${props => `${props.thumbSize}px`};
    height: ${props => props.height > 8 ? '100%' : `${props.thumbSize}px`};
    border-radius: ${props => props.height > 8 ? '6px' : '100%'};
    background: var(--color-bg-white);
    border: ${props => props.height > 8 ? '1px solid rgba(73, 90, 122, 0.12)' : 'none'};
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
    transition: border-color linear 0.2s;
    &:hover {
      border-color: rgba(69, 80, 102, 0.25);
    }
  }
`;

export default Slider;
