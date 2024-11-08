import { CommonProps } from "packages/types";
import Icon from "../Icon";
import React from "react";
import AudioAnimation from "./AudioAnimationIcon";
import styled from "styled-components";

type AudioButtonProps = {
  /** 播放/ 暂停 */
  play?: boolean;
  /** 是否显示动画 */
  animation?: boolean;
  /** 图标大小 */
  iconSize?: number;
  onClick?: (e: any) => void;
} & CommonProps;

const AudioButton: React.FC<AudioButtonProps> = ({
  play,
  animation = false,
  iconSize = 24,
  style,
  className = "",
  onClick,
}) => {
  return (
    <StyledLandAudioButton
      className={`land-audio-play-icon ${className}`}
      style={style}
      onClick={onClick}
      iconSize={iconSize}
    >
      {play ? (
        animation ? (
          <Icon
            name="video-play"
            size={iconSize / 1.8}
            fill="var(--color-primary-6)"
          />
        ) : (
          <AudioAnimation size={iconSize / 1.8} />
        )
      ) : (
        <Icon name="video-pause" size={24} fill="var(--color-primary-6)" />
      )}
    </StyledLandAudioButton>
  );
};

const StyledLandAudioButton = styled.div<{
  iconSize?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.iconSize}px`};
  height: ${(props) => `${props.iconSize}px`};
`;

export default AudioButton;
