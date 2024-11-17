import { default as React } from 'react';
type Props = {
    /** 倍数播放数据 */
    rateData?: {
        key: number;
        value: number;
    }[];
    /** 倍数播放值 */
    rateValue?: number;
    /** 倍数播放事件 */
    onRateChange?: (val: number, item: {
        key: number;
        value: number;
    }, e: any) => void;
    /** 自动循环 */
    loop?: boolean;
    onLoopChange?: () => void;
};
declare const VideoSetting: React.FC<Props>;
export default VideoSetting;
