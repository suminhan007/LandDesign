import React, { CSSProperties } from "react"

type IconProps = {
    fill?: string;
    stroke?: string;
    size?: number;
    strokeWidth?: number;
    style?: CSSProperties;
    className?: string;
}

// 方向类图标
export const IconArrowLine: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M24 42V6" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 30L24 42L12 30" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrowDouble: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
            <path d="M31 17L24 24L17 17" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31 26L24 33L17 26" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrow: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M36 18L24 30L12 18" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrowTriangle: React.FC<IconProps> = ({
    fill = "currentColor",
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M36 19L24 31L12 19H36Z" fill={strokeWidth === 0 ? fill : 'none'} stroke={strokeWidth === 0 ? 0 : stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrowTo: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M24.0083 33.8995V6" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 22L24 34L12 22" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 42H12" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconCollapse: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M44 20H28V4" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 28H20V44" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconCollection: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M38.0427 3.95386L42.021 8.02038L38.0427 11.9612" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconZoomOut: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M6 6L16 15.8995" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 41.8995L16 32" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42.0001 41.8995L32.1006 32" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41.8995 6L32 15.8995" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M33 6H42V15" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M42 33V42H33" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M15 42H6V33" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M6 15V6H15" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconZoomIn: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M6 6L16 15.8995" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 41.8995L16 32" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42.0001 41.8995L32.1006 32" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41.8995 6L32 15.8995" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M32 7V16H41" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M16 7V16H7" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M16 41V32H7" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><path d="M32 41V32H40.8995" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconLoop: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 7L44 13L38 19" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconDownload: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
            <path d="M6 24.0083V42H42V24" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 23L24 32L15 23" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.9917 6V32" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconOut: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M23.9917 6H6V42H24" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 33L42 24L33 15" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 23.9917H42" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconReload: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 8V17H33" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconUndo: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9V17H14" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconSort: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M19 6V42" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 17.8994L19 5.89941" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 42.1006V6.10059" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 42.1006L41 30.1006" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconBack: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 28L10 33L4 25" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconAhead: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
        <path d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 28L38 33L44 25" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconDrag: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
        <path d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 28L38 33L44 25" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconRefresh: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M42 8V24" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 24L6 40" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    <path d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

//提示类



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