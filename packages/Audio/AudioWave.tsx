import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type AudioWaveProps = {
  /** 音频文件 url */
  audioUrl: string;
  /** 波形宽度 */
  width?: string | number;
  /** 波形高度 */
  height?: string | number;
  /** 波形取样数 */
  samples?: number;
  /** 条状波形宽度 */
  barWidth?: number;
  /** 条状波形间距 */
  barGap?: number;
  /** 是否放大波形差异 */
  amplify?: boolean;
  /** 是否拉伸变形填满高度 */
  normalize?: boolean;
  /** 默认颜色 */
  defaultColor?: string;
  activeColor?: string;
};
const AudioWave: React.FC<AudioWaveProps> = ({
  audioUrl,
  width = "100%",
  height = 24,
  samples,
  barWidth,
  barGap,
  //   amplify = false,
  normalize = false,
  defaultColor = "#DADADA",
  //   activeColor,
}) => {
  const audioWaveContainerRef = useRef<HTMLDivElement>(null);
  const waveCanvasRef = useRef<HTMLCanvasElement>(null);
  const waveAudioRef = useRef<HTMLAudioElement>(null);
  const [audioSamples, setAudioSamples] = useState<number>(samples);

  useEffect(() => {
    if (!audioWaveContainerRef.current || samples) return;
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setAudioSamples(
          Math.floor((entry.contentRect.width + barGap) / (barGap + barWidth))
        );
      });
    };
    const resizeObserver = new ResizeObserver(callback);
    resizeObserver.observe(audioWaveContainerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        // Fetch the audio file
        const response = await fetch(audioUrl);
        const arrayBuffer = await response.arrayBuffer();

        // Decode the audio data
        const audioContext = new window.AudioContext();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // Draw the waveform
        drawWaveform(audioBuffer);
      } catch (error) {
        console.error("Error fetching or decoding audio data:", error);
      }
    };

    const drawWaveform = (audioBuffer) => {
      const canvas = waveCanvasRef.current;
      const canvasContext = canvas.getContext("2d");
      const { width, height } = canvas;

      // Clear the canvas
      canvasContext.clearRect(0, 0, width, height);

      // Get the audio data
      const rawData = audioBuffer.getChannelData(0); // Use the first channel
      const blockSize = Math.floor(rawData.length / samples); // Number of samples in each block
      const filteredData = [];
      for (let i = 0; i < audioSamples; i++) {
        const blockStart = blockSize * i;
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum += Math.abs(rawData[blockStart + j]);
        }
        const value = sum / blockSize;
        if (!Number.isNaN(value)) {
          filteredData.push(value);
        }
      }
      let newData = filteredData;

      // Normalize the data
      if (normalize) {
        const max = Math.max(...filteredData);
        newData = filteredData.map((n) => n / max);
      }

      // Draw the waveform
      canvasContext.fillStyle = defaultColor;
      const barWidth = width / samples;
      newData.forEach((value, i) => {
        const x = i * barWidth;
        const y = height - value * height;
        canvasContext.fillRect(x, y, barWidth, value * height);
      });
    };

    fetchAudioData();
  }, [audioUrl, audioSamples]);
  return (
    <StyledLandAudioWaveContainer
      ref={audioWaveContainerRef}
      width={width}
      height={height}
    >
      <canvas
        ref={waveCanvasRef}
        className="land-audio-wave-canvas"
        height={24}
      />
      <audio ref={waveAudioRef} />
    </StyledLandAudioWaveContainer>
  );
};

const StyledLandAudioWaveContainer = styled.div<{
  width?: number | string;
  height?: number | string;
}>`
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
`;
export default AudioWave;
