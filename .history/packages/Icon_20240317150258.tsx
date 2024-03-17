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
export const IconLoading: React.FC<IconProps> = ({
    color = "currentColor",
    size = 14
}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
            <path d="M24 42V6" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M36 30L24 42L12 30" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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