import { default as React, CSSProperties } from 'react';
export type AvatarProps = {
    /** 名称 */
    name?: string;
    /** 名称缩写 */
    abbreviationName?: string;
    /** 头像图片地址 */
    imgUrl?: string;
    /** 特殊头像 */
    content?: React.ReactNode;
    /** 头像尺寸 */
    size?: number;
    /** 头像圆角：默认为圆形 */
    radius?: number;
    /** 头像框背景 */
    bg?: string;
    /** 头像框字体颜色 */
    color?: string;
    /** 头像框边框 */
    border?: string;
    style?: CSSProperties;
    className?: string;
};
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
