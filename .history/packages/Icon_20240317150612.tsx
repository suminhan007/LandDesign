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
export const IocnArrowLine: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
            <path d="M24 42V6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 30L24 42L12 30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IocnArrowRound: React.FC<IconProps> = ({
    color = "currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
            <path d="M24 42V6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 30L24 42L12 30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
<? xml version = "1.0" encoding = "UTF-8" ?>
    <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke="#202020" stroke-width="2" stroke-linejoin="round" /><path d="M24 15V33" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M33 24L24 33L15 24" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

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