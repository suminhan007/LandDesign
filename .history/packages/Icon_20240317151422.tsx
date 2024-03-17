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