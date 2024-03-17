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
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M24 42V6" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 30L24 42L12 30" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrowDouble: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} calssName={className}>
            <path d="M31 17L24 24L17 17" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31 26L24 33L17 26" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrow: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M36 18L24 30L12 18" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrowTriangle: React.FC<IconProps> = ({
    fill = "currentColor",
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M36 19L24 31L12 19H36Z" fill={strokeWidth === 0 ? fill : 'none'} stroke={strokeWidth === 0 ? 'none' : stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
        </svg>
    )
}

export const IconArrowTo: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M24.0083 33.8995V6" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 22L24 34L12 22" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 42H12" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconCollapse: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M44 20H28V4" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 28H20V44" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconCollection: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
            <path d="M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.0427 3.95386L42.021 8.02038L38.0427 11.9612" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconZoomOut: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M6 6L16 15.8995" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 41.8995L16 32" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42.0001 41.8995L32.1006 32" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M41.8995 6L32 15.8995" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 6H42V15" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 33V42H33" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 42H6V33" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 15V6H15" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconZoomIn: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M6 6L16 15.8995" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 41.8995L16 32" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42.0001 41.8995L32.1006 32" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M41.8995 6L32 15.8995" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 7V16H41" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 7V16H7" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 41V32H7" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 41V32H40.8995" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconLoop: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 7L44 13L38 19" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconDownload: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
            <path d="M6 24.0083V42H42V24" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 23L24 32L15 23" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.9917 6V32" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconOut: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M23.9917 6H6V42H24" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 33L42 24L33 15" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 23.9917H42" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconReload: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 8V17H33" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconUndo: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9V17H14" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconSort: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M19 6V42" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 17.8994L19 5.89941" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 42.1006V6.10059" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 42.1006L41 30.1006" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconBack: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 28L10 33L4 25" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconAhead: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
        <path d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 28L38 33L44 25" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconDrag: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
        <path d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 28L38 33L44 25" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const IconRefresh: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
    <path d="M42 8V24" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 24L6 40" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

//提示类
export const IconCheckStroke: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
            <path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="none" stroke={stroke} strokeWidth={strokeWidth} stroke-linejoin="round" />
            <path d="M16 24L22 30L34 18" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const IconCheckFill: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z" fill={fill} />
        </svg>
    )
}

export const IconCheck: React.FC<IconProps> = ({
    fill = "currentColor",
    stroke = "currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z"
                fill={strokeWidth === 0 ? fill : 'none'}
                stroke={strokeWidth === 0 ? 'none' : stroke}
                strokeWidth={strokeWidth}
            />
        </svg>
    )
}

export const IconErrorStroke: React.FC<IconProps> = ({
    stroke ="currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
            <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke={stroke} stroke-width={strokeWidth} stroke-linejoin="round" />
            <path d="M29.6567 18.3432L18.343 29.6569" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.3433 18.3432L29.657 29.6569" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const IconErrorFill: React.FC<IconProps> = ({
    fill ="currentColor",
    size = 16,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z" fill="#D9D9D9" style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
        </svg>
    )
}

export const IconError: React.FC<IconProps> = ({
    fill = "currentColor",
    stroke = "currentColor",
    size = 16,
    strokeWidth = 2,
    style,
    className,
}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={style} className={className}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z"
                fill={strokeWidth === 0 ? fill : 'none'}
                stroke={strokeWidth === 0 ? 'none' : stroke}
                strokeWidth={strokeWidth}
            />
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