// @ts-nocheck
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

type AudioProps = {
  url: string;
  iconSize?: number;
  /** 波形排列方向 */
  direction?: "row" | "column";
  /** 显示波形 */
  showWave?: boolean;
  removeMin?: boolean;
  style?: CSSProperties;
  className?: string;
};
const Audio: React.FC<AudioProps> = ({
  url,
  iconSize = 24,
  direction = "row",
  showWave,
  removeMin,
  style,
  className = "",
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    if (!audioRef.current && !waveAudioRef.current) return;
    const audio = audioRef.current || waveAudioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [play]);

  const waveCanvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const waveAudioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (!inputRef.current || !waveAudioRef.current || !waveCanvasRef.current)
      return;
    const canvas = waveCanvasRef.current;
    const width = canvas.width;
    const ctx = canvas.getContext("2d");
    const audio = waveAudioRef.current;
    const audioContext = new window.AudioContext();

    let filteredData = [];
    let barWidth = 2;
    let barGap = 2;
    let samples = Math.floor((width + barGap) / (barGap + barWidth));
    inputRef.current.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const arrayBuffer = e.target.result;
          audioContext.decodeAudioData(arrayBuffer, (buffer) => {
            drawWaveform(buffer);
            const audioUrl = URL.createObjectURL(file);
            audio.src = audioUrl;
          });
        };
        reader.readAsArrayBuffer(file);
      }
    });

    function drawWaveform(buffer) {
      const rawData = buffer.getChannelData(0); // We use only the first channel
      const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
      filteredData = [];
      for (let i = 0; i < samples; i++) {
        let blockStart = blockSize * i; // the location of the first sample in the block
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
        }
        const value = sum / blockSize;
        if (!Number.isNaN(value)) {
          filteredData.push(value);
        }
      }
      draw();
    }

    function mapToNewRange(arr, min, max) {
      // 映射函数
      const mapValue = (value, oldMin, oldMax, newMin, newMax) => {
        return (
          ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin
        );
      };

      // 将原数组中的每个元素映射到新的范围内
      const newArr = arr.map((value) => mapValue(value, min, max, 0, 1));

      return newArr;
    }

    function draw() {
      let newData = filteredData;
      if (removeMin) {
        const min = Math.min(...filteredData);
        const max = Math.max(...filteredData);
        const newMin = Math.min(...filteredData.filter((i) => i !== min));
        newData = mapToNewRange(
          filteredData.filter((i) => i !== min),
          newMin,
          max
        );
      } else {
        const max = Math.max(...filteredData);
        newData = mapToNewRange(filteredData, 0, max);
      }

      const width = canvas.width;
      const height = canvas.height;
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const playedSamples = Math.floor((currentTime / duration) * samples);
      ctx.clearRect(0, 0, width, height);

      newData.forEach((value, index) => {
        const x = index * barWidth + index * barGap;
        const y = value * height;

        ctx.fillStyle = index < playedSamples ? "#FF0000" : "#999";
        ctx.fillRect(x, height - y, barWidth, y);
      });
    }

    audio.addEventListener("timeupdate", draw);

    canvas.addEventListener("click", (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const clickPosition = x / canvas.width;
      const newTime = clickPosition * audio.duration;
      audio.currentTime = newTime;
    });
  }, [play]);

  return (
    <StyledLandAudio
      iconSize={iconSize}
      direction={direction}
      className={className}
      style={style}
    >
      <div
        className="land-audio-play-icon"
        onClick={(e) => {
          e.stopPropagation();
          setPlay(!play);
        }}
      >
        {play ? (
          showWave ? (
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
      </div>
      {showWave ? (
        <>
          <input type="file" accept="audio/*" ref={inputRef} />
          <canvas
            ref={waveCanvasRef}
            className="land-audio-waveform"
            height={24}
          />
          <audio ref={waveAudioRef} />
        </>
      ) : (
        <audio src={url} ref={audioRef} />
      )}
    </StyledLandAudio>
  );
};

const StyledLandAudio = styled.div<{
  iconSize?: number;
  direction?: "row" | "column";
}>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-width: ${(props) => `${props.iconSize}px`};
  min-height: ${(props) => `${props.iconSize}px`};
  .land-audio-play-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
  .land-audio-curTime {
    font-size: 12px;
    color: var(--color-text-4);
  }
  .land-audio-waveform {
    flex: 1;
    .hover {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      pointer-events: none;
      height: 100%;
      width: 0;
      mix-blend-mode: overlay;
      background: rgba(255, 255, 255, 0.5);
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .waveform:hover .hover {
      opacity: 1;
    }
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
    transform-origin: center;
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
