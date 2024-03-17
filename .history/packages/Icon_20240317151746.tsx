import React, { CSSProperties } from "react"

type IconProps = {
    color?: string;
    size?: number;
    strokeWidth?; number;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
}

// 方向类图标
export const IocnArrowDouble: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
            <path d="M31 17L24 24L17 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31 26L24 33L17 26" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IocnArrow: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M36 18L24 30L12 18" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const IocnArrowTriangle: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M36 19L24 31L12 19H36Z" fill="none" stroke="#202020" stroke-width="2" stroke-linejoin="round" />
        </svg>
    )
}

export const IocnCollapse: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M44 20H28V4" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 28H20V44" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const IocnCollection: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M38.0427 3.95386L42.021 8.02038L38.0427 11.9612" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const IocnZoom: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M38.0427 3.95386L42.021 8.02038L38.0427 11.9612" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

<? xml version = "1.0" encoding = "UTF-8" ?> <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L16 15.8995" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 41.8995L16 32" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M42.0001 41.8995L32.1006 32" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M41.8995 6L32 15.8995" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M33 6H42V15" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M42 33V42H33" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M15 42H6V33" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M6 15V6H15" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
// const StyledSvg = styled.svg`
//     animation: loadingRotate 0.68s linear infinite;
//     @keyframes loadingRotate {
//         0%{
//             transform: rotate(0);
//         }
//         100%{
//             transform: rotate(1turn);
//         }
//     }
// `