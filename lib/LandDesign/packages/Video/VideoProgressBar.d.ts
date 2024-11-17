import { default as React } from 'react';
type VideoProgressBarProps = {
    /** 当前进度百分比 */
    curPercentage?: number;
    /** 当前预加载进度 */
    bufferPercentage?: number;
    /** 自定义样式 */
    activeBg?: string;
    /** 进度条点击事件 */
    onClick?: (value: number, e: any) => void;
    /** 进度条move事件 */
    onMove?: (value: number, left: number, width: number, e: any) => void;
    onMouseLeave?: (e: any) => void;
};
declare const VideoProgressBar: React.FC<VideoProgressBarProps>;
export default VideoProgressBar;
