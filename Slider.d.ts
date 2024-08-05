import React from 'react';
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
declare const Slider: React.FC<SliderProps>;
export default Slider;
