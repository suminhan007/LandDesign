import { default as React, CSSProperties, ReactNode } from 'react';
import { ButtonProps } from './Button';
export type DrawerProps = {
    /** 是否显示侧拉窗 */
    show?: boolean;
    /** 侧拉窗位置 */
    placement?: "right" | "bottom";
    /** 是否需要背景遮罩 */
    mask?: boolean;
    /** 侧拉窗标题 */
    title?: string | ReactNode;
    /** 自定义头部左侧 */
    headerLeftComponent?: ReactNode;
    /** 自定义头部右侧 */
    headerRightComponent?: ReactNode;
    /** 自定义头部 */
    headerComponent?: ReactNode;
    /** 是否隐藏头部分割线 */
    useHeaderDivider?: boolean;
    /** 自定义尾部左侧 */
    footerLeftComponent?: ReactNode;
    /** 自定义尾部右侧 */
    footerRightComponent?: ReactNode;
    /** 自定义尾部 */
    footerComponent?: ReactNode;
    /** 是否隐藏尾部分割线 */
    useFooterDivider?: boolean;
    /** 取消按钮文案 */
    cancelLabel?: string | ReactNode;
    /** 确定按钮文案 */
    submitLabel?: string | ReactNode;
    cancelDisabled?: boolean;
    submitDisabled?: boolean;
    cancelButtonProps?: ButtonProps;
    submitButtonProps?: ButtonProps;
    /** 侧拉窗最小宽度 */
    minWidth?: string;
    /** 侧拉窗最大宽度 */
    maxWidth?: string;
    /** 侧拉窗大小 */
    size?: "small" | "medium" | "large" | "auto";
    /** 关闭侧拉窗事件 */
    onClose?: () => void;
    /** 取消事件 */
    onCancel?: () => void;
    /** 确定事件 */
    onSubmit?: () => void;
    children?: ReactNode;
    /** 外层样式 */
    wrapStyle?: CSSProperties;
    wrapClassName?: string;
    /** 内层样式 */
    contentStyle?: CSSProperties;
    contentClassName?: string;
    /** body层样式 */
    bodyStyle?: CSSProperties;
    bodyClassName?: string;
    /** 遮罩样式 */
    maskStyle?: CSSProperties;
};
declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
