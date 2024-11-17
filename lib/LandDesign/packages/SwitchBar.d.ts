import { CommonProps } from './types';
export type MsSwitchItemType<T = React.ReactNode> = {
    value: any;
    label: T;
    disabled?: boolean;
    tip?: T;
    iconTip?: T;
    showIcon?: boolean;
};
export type SwitchBarProps<T = any> = {
    width?: string;
    /** 当前选中 */
    value?: T | T[];
    /** 数据 */
    data?: MsSwitchItemType[];
    /** 选项间是否有分割线 */
    useDivider?: boolean;
    /** 点击事件 */
    onChange?: (value: T, item?: MsSwitchItemType) => void;
    activeClassName?: string;
    switchDisabled?: boolean;
} & CommonProps;
declare function SwitchBar<T>({ width, value, data, useDivider, onChange, activeClassName, className, switchDisabled, style, }: SwitchBarProps<T>): import("react/jsx-runtime").JSX.Element;
export default SwitchBar;
