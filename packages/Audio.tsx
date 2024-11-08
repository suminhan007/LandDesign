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
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const audioContext = new (window.AudioContext || window.AudioContext)();
    const request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = () => {
      audioContext.decodeAudioData(request.response, (buffer) => {
        drawWaveform(buffer);
      });
    };

    request.send();

    const drawWaveform = (buffer) => {
      const rawData = buffer.getChannelData(0);
      console.log('rawData', rawData);
      const samples = 1000; // Number of samples we want to have in our final data
      const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
      const filteredData = [];
      for (let i = 0; i < samples; i++) {
        let blockStart = blockSize * i; // the location of the first sample in the block
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
        }
        filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
      }

      const width = canvas.width;
      const height = canvas.height;
      const barWidth = width / samples;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000000';

      filteredData.forEach((value, index) => {
        const x = index * barWidth;
        const y = value * height;
        ctx.fillRect(x, height - y, barWidth, y);
      });
    };
  }, [url]);
  return (
    <StyledLandAudio onClick={() => setPlay(!play)} iconSize={iconSize}>
      <audio ref={audioRef} src={url} />
      {play ? (
        <AudioAnimation size={iconSize / 1.8} />
      ) : (
        <Icon name="video-pause" size={24} fill="var(--color-text-2)" />
      )}
      <canvas ref={canvasRef} width="800" height="200"></canvas>
    </StyledLandAudio>
  );
};

const StyledLandAudio = styled.div<{
  iconSize?: number;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
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
  color = "var(--color-text-2)",
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