import React from 'react'
import styled from 'styled-components'


export type LoadingProps = {
  size?: number;
  strokeSize?: number;
  color?: string;
};
const Loading: React.FC<LoadingProps> = ({
  size = 18,
  strokeSize = 2,
  color = 'var(--color-text-1)'
}) => {
  return (
    <StyledLoadingContainer className="land-loading-container" size={size} strokeSize={strokeSize} color={color}></StyledLoadingContainer>
  )
}

const StyledLoadingContainer = styled.div<{
  size: number;
  strokeSize: number;
  color: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  -webkit-mask: ${(props) => `radial-gradient(
      circle ${props.size / 2 - props.strokeSize}px,
      transparent 99%,
      #000 100%
    )`};
  mask: ${(props) => `radial-gradient(
      circle ${props.size / 2 - props.strokeSize}px,
      transparent 99%,
      #000 100%
    )`};
  background-image: ${(props) =>
    `conic-gradient(transparent 25%, ${props.color})`};
  animation: spin 0.9s linear infinite;
  border-radius: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
