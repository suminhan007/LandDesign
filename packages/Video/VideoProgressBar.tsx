import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

type VideoProgressBarProps = {
  /** 当前进度百分比 */
  curPercentage?: number;
  /** 当前预加载进度 */
  bufferPercentage?: number;
  /** 自定义样式 */
  activeBg?: string;
  /** 进度条点击事件 */
  onClick?: (value: number, e: any) => void;
  /** 进度条move事件 */
  onMove?: (value: number, left: number, width: number, e: any) => void;
  onMouseLeave?: (e: any) => void;
};
const VideoProgressBar: React.FC<VideoProgressBarProps> = ({
  curPercentage = 0,
  bufferPercentage = 0,
  activeBg = 'var(--color-primary-6)',
  onClick,
  onMove,
  onMouseLeave,
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach(entry => {
        setWidth(entry.contentRect.width)
      });
    };
    const observer = new ResizeObserver(callback);
    observer.observe(progressBarRef.current);
    return () => observer.disconnect();
  }, []);

  const [hover, setHover] = useState<boolean>(false);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [moveLeft, setMoveLeft] = useState<number>(0);

  const handleBarMove = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    if (rect) {
      setMoveLeft((e.clientX - rect.left) / rect.width);
      if (isDrag) onClick?.((e.clientX - rect.left) / rect.width, e);
    }
    onMove?.((e.clientX - rect.left) / rect.width, e.clientX - rect.left, rect.width, e)
  }, [isDrag]);
  return (
    <StyledVideoProgressBar ref={progressBarRef} className={`land-video-progress-bar ${hover ? 'hover' : ''}`} >
      <div className='land-video-progress-bar-list'
        onMouseMove={handleBarMove}
        onMouseDown={(e) => { e.preventDefault() }}
        onClick={() => { setIsDrag(true); onClick?.(moveLeft, length) }}
        onMouseLeave={(e) => { setMoveLeft(0); setHover(false); setIsDrag(false); onMouseLeave?.(e) }}
        onMouseOver={() => setHover(true)}
        onMouseUp={() => setIsDrag(false)}
      >
        <div className='land-video-progress-bar default'></div>
        <div className='land-video-progress-bar buffer' style={{ transform: `scaleX(${bufferPercentage})` }}></div>
        <div className='land-video-progress-bar hover' style={{ transform: `scaleX(${moveLeft})` }}></div>
        <div className='land-video-progress-bar marker' onMouseMove={() => console.log('move2')} style={{ transform: `scaleX(${curPercentage})`, backgroundColor: activeBg }}></div>
      </div>
      <div className='land-video-progress-bar-thumb' style={{ transform: `translateX(${curPercentage * width}px)`, backgroundColor: activeBg }}></div>
    </StyledVideoProgressBar>
  )
}

const StyledVideoProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.25rem;
  border-radius: 2px;
  .land-video-progress-bar-list{
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s linear;
  }
  .land-video-progress-bar.default{
    background-color: rgba(255,255,255,0.36);
  }
  .land-video-progress-bar.buffer{
    background-color: rgba(255,255,255,0.6);
  }
  .land-video-progress-bar.hover{
    background-color: rgba(255,255,255,0.8);
  }
  .land-video-progress-bar{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: left center;
    pointer-events: none;
  }
  .land-video-progress-bar-thumb{
    position: absolute;
    left: -0.5rem;
    top: -0.375rem;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    opacity: 0;
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
  &.hover{
    .land-video-progress-bar-list{
      transform: scaleY(2);
    }
    .land-video-progress-bar-thumb{
        opacity: 1;
      }
  }
`;

export default VideoProgressBar;
