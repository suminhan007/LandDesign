import { CSSProperties } from "react"

type IconProps = {
    color?: string;
    size?: number;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
}

// 方向类图标
export const  IconLoading = ({
    color = "currentColor",
    size = 14
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36">
            <defs>
                <linearGradient x1="0%" y1="100%" x2="100%" y2="100%" id="linearGradient-133">
                    <stop stopColor={color} stopOpacity="0" offset="0%"></stop>
                    <stop stopColor={color} stopOpacity="0.60" offset="50%"></stop>
                    <stop stopColor={color} offset="100%"></stop>
                </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect fillOpacity="0.01" fill="none" x="0" y="0" width="36" height="36"></rect>
                <path d="M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951" stroke="url(#linearGradient-133)" strokeWidth="6" stroke-linecap="round"></path>
            </g>
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