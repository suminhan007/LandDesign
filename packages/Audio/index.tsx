import styled from "styled-components";
import AudioButton from "./AudioButton";
import AudioAnimationIcon from "./AudioAnimationIcon";
import { CommonProps } from "packages/types";
import { useEffect, useRef, useState } from "react";

export type AudioProps = {
  /** 音频文件 url */
  audioUrl: string;
  direction?: "row" | "column";
  /** 是否显示波形 */
  showWave?: boolean;
} & CommonProps;

const Audio: React.FC<AudioProps> & {
  AudioButton: typeof AudioButton;
  AudioAnimationIcon: typeof AudioAnimationIcon;
} = ({ audioUrl, direction = "row", style, className = "" }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    if (play) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [play]);
  return (
    <StyledLandAudio direction={direction} className={className} style={style}>
      <AudioButton
        play={play}
        onClick={(e) => {
          e.stopPropagation();
          setPlay(!play);
        }}
      />
      <audio ref={audioRef} src={audioUrl} />
    </StyledLandAudio>
  );
};

const StyledLandAudio = styled.div<{
  direction?: "row" | "column";
}>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

Audio.AudioButton = AudioButton;
Audio.AudioAnimationIcon = AudioAnimationIcon;

export default Audio;
