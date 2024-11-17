import { default as React, CSSProperties } from 'react';
type VideoProps = {
    /** 视频地址 */
    src?: string;
    /** 后退或快进的秒数单位 */
    forwardSecond?: number;
    /** 是否显示实时帧 */
    useKeyImg?: boolean;
    /** 是否开启键盘控制 */
    useKeyControls?: boolean;
    /** 容器类名 */
    className?: string;
    /** 容器样式 */
    style?: CSSProperties;
    /** 视频类名 */
    videoClassName?: string;
    /** 视频样式 */
    videoStyle?: CSSProperties;
    /** 是否显示底部控件 */
    showControls?: boolean;
    /** 网页宽屏 */
    onFullWidthChange?: (fullWidth: boolean) => void;
    /** 显示上集切换按钮 */
    usePrevEpisode?: boolean;
    /** 显示下集切换按钮 */
    useNextEpisode?: boolean;
    /** 上一集 */
    prevEpisodeHref?: string;
    /** 下一集 */
    nextEpisodeHref?: string;
};
declare const Video: React.FC<VideoProps>;
export default Video;
