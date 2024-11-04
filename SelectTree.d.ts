import React, { CSSProperties } from "react";
type SelectTreeItemType = {
    /** 唯一标识 */
    value: string | number;
    label: React.ReactNode;
    /** 选项提示内容*/
    tip?: React.ReactNode;
    /** 选项图标类型提示 */
    info?: React.ReactNode;
    disabled?: boolean;
    children?: SelectTreeItemType[];
};
export type SelectTreeProps = {
    /** 数据 */
    data?: SelectTreeItemType[];
    /** 占位符 */
    placeholder?: string;
    /** 当前选中项 */
    selected?: string | number;
    /** 宽度 */
    width?: number | string;
    /** 标题 */
    title?: string;
    /** 标题提示内容 */
    titleInfo?: React.ReactNode;
    /** 选框提示内容 */
    info?: React.ReactNode;
    /** 是否禁用 */
    disabled?: boolean;
    onChange?: (item: SelectTreeItemType) => void;
    className?: string;
    style?: CSSProperties;
};
declare const SelectTree: React.FC<SelectTreeProps>;
export default SelectTree;
