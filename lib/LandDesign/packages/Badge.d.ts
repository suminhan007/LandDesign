import { default as React } from 'react';
export type BadgeProps = {
    /** 是否为点 */
    isDot?: boolean;
    /** 徽标数值 */
    count?: number;
    /** 显示的最大数： 超过则缩略显示 */
    exceedCount?: number;
    /** 其他内容徽标 */
    content?: React.ReactNode;
    /** 徽标圆角: 默认为圆形 */
    radius?: number;
    /** 徽标背景色 */
    bg?: string;
    /** 徽标字体色 */
    color?: string;
    /** 徽标边框 */
    border?: string;
    children?: React.ReactNode;
};
declare const Badge: React.FC<BadgeProps>;
export default Badge;
