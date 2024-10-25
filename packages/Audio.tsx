import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

type AudioProps = {
  url: string;
  iconSize?: number;
};
const Audio: React.FC<AudioProps> = ({ url, iconSize = 24 }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    if (play) {
      audioRef.current.src = url;
    } else {
      audioRef.current.src = "";
    }
  }, [play, url]);
  return (
    <StyledLandAudio onClick={() => setPlay(!play)} iconSize={iconSize}>
      <audio ref={audioRef} />
      {play ? (
        <AudioAnimation size={iconSize / 1.8} />
      ) : (
        <Icon name="video-pause" size={24} fill="var(--color-primary-6)" />
      )}
    </StyledLandAudio>
  );
};

const StyledLandAudio = styled.div<{
  iconSize?: number;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: ${(props) => `${props.iconSize}px`};
  min-height: ${(props) => `${props.iconSize}px`};
  audio {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

type AudioAnimationProps = {
  color?: string;
  size?: number;
};
const AudioAnimation: React.FC<AudioAnimationProps> = ({
  color = "var(--color-primary-6)",
  size = 12,
}) => (
  <StyleTemplateSoundCardAnimation
    className="flex items-center justify-between"
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    {Array.from({ length: 4 }).map((_itme, index) => (
      <div
        className="audioBar radius-2 height-100"
        key={index}
        style={{
          background: color,
        }}
      ></div>
    ))}
  </StyleTemplateSoundCardAnimation>
);

const StyleTemplateSoundCardAnimation = styled.div`
  --speed: 1s;

  .audioBar {
    width: 2px;
    transition: background-color 0.3s ease;
    transform-origin: bottom;
  }

  .audioBar:nth-child(1) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.45) infinite;
  }

  .audioBar:nth-child(2) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.3) infinite;
  }

  .audioBar:nth-child(3) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.15) infinite;
  }

  .audioBar:nth-child(4) {
    animation: grow var(--speed) ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(0.375);
    }

    50% {
      transform: scaleY(1);
    }
  }
`;

export default Audio;
