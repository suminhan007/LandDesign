import { default as React } from 'react';
export type SliderProps = {
    /** 是否需要背景分割线 */
    useDivider?: boolean;
    /** 是否需要前缀和后缀 */
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    min?: number;
    max?: number;
    /** 调节步数 */
    step?: number;
    /** 输入值 */
    value?: number;
    onChange?: (val: number) => void;
    /** 控件高度 */
    height?: number;
    thumbSize?: number;
    defaultBg?: string;
    activeBg?: string;
    className?: string;
};
declare const Slider: React.FC<SliderProps>;
export default Slider;
