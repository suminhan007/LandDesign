import styled from "styled-components";

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

export default AudioAnimation;
