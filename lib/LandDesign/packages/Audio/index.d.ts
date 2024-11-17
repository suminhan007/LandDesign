import { default as AudioButton } from './AudioButton';
import { default as AudioAnimationIcon } from './AudioAnimationIcon';
import { CommonProps } from '../types';
export type AudioProps = {
    /** 音频文件 url */
    audioUrl: string;
    direction?: "row" | "column";
    /** 是否显示波形 */
    showWave?: boolean;
} & CommonProps;
declare const Audio: React.FC<AudioProps> & {
    AudioButton: typeof AudioButton;
    AudioAnimationIcon: typeof AudioAnimationIcon;
};
export default Audio;
