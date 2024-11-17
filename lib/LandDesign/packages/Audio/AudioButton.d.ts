import { CommonProps } from '../types';
import { default as React } from 'react';
type AudioButtonProps = {
    /** 播放/ 暂停 */
    play?: boolean;
    /** 是否显示动画 */
    animation?: boolean;
    /** 图标大小 */
    iconSize?: number;
    onClick?: (e: any) => void;
} & CommonProps;
declare const AudioButton: React.FC<AudioButtonProps>;
export default AudioButton;
