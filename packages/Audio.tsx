import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

type AudioProps = {
  url: string;
  iconSize?: number;
};
const Audio: React.FC<AudioProps> = ({ url, iconSize = 24 }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const waveCanvasRef = useRef<HTMLCanvasElement>(null);
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play, url]);

  const [filteredData, setFilteredData] = useState([]);
  const samples = 1000;
  const audioContextRef = useRef(new window.AudioContext());

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContextRef.current.decodeAudioData(
        arrayBuffer
      );
      drawWaveform(audioBuffer);
    };

    fetchData();
  }, [url]);

  const drawWaveform = (buffer) => {
    const rawData = buffer.getChannelData(0); // We use only the first channel
    const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
    const data = [];
    for (let i = 0; i < samples; i++) {
      let blockStart = blockSize * i; // the location of the first sample in the block
      let sum = 0;
      for (let j = 0; j < blockSize; j++) {
        sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
      }
      data.push(sum / blockSize); // divide the sum by the block size to get the average
    }
    setFilteredData(data);
  };

  const draw = () => {
    const canvas = waveCanvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const barWidth = width / samples;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const playedSamples = Math.floor((currentTime / duration) * samples);

    ctx.clearRect(0, 0, width, height);

    filteredData.forEach((value, index) => {
      const x = index * barWidth;
      const y = value * height;
      ctx.fillStyle = index < playedSamples ? "#0000FF" : "#CCCCCC"; // Blue for played, gray for unplayed
      ctx.fillRect(x, height - y, barWidth, y);
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", draw);

    return () => {
      audio.removeEventListener("timeupdate", draw);
    };
  }, [filteredData]);

  const handleCanvasClick = (event) => {
    const canvas = waveCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const clickPosition = x / canvas.width;
    const newTime = clickPosition * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };
  return (
    <StyledLandAudio onClick={() => setPlay(!play)} iconSize={iconSize}>
      <audio ref={audioRef} src={url} autoPlay />
      <div className="land-audio-play-icon">
        {play ? (
          <AudioAnimation size={iconSize / 1.8} />
        ) : (
          <Icon name="video-pause" size={24} fill="var(--color-primary-6)" />
        )}
      </div>
      <canvas
        ref={waveCanvasRef}
        width={800}
        height={200}
        onClick={handleCanvasClick}
        className="border"
      />
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
  .land-audio-play-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
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
