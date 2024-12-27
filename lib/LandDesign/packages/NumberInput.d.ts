import { default as React, CSSProperties } from 'react';
export type NumberInputProps = {
    /** 当前输入值 */
    value?: number;
    /** 输入框样式 */
    type?: 'border' | 'background';
    /** 调整步数 */
    step?: number;
    /** 最小值 */
    min?: number;
    /** 最大值 */
    max?: number;
    /** 前缀 */
    prefix?: string;
    /** 单位 */
    suffix?: string;
    /** 是否禁用输入框 */
    disabled?: boolean;
    width?: number | string;
    className?: string;
    style?: CSSProperties;
    onChange?: (value: number, event: any) => void;
    [key: string]: any;
};
declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
