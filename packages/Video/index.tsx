//@ts-nocheck
import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components';
import Icon from '../Icon';
import Slider from '../Slider';
import VideoProgressBar from './VideoProgressBar';
import AffixContainer from "../AffixContainer";
import Loading from "../Loading";
import useClickOutside from "../hooks/useClickOutside";
import Pop from "../Pop";
import VideoSetting from "./VideoSetting";
import useFormateTime from "../hooks/useFormateTime";
import Alert from "../Alert";

type VideoProps = {
  /** 视频地址 */
  src?: string;
  /** 后退或快进的秒数单位 */
  forwardSecond?: number;
  /** 是否显示实时帧 */
  useKeyImg?: boolean;
  /** 是否开启键盘控制 */
  useKeyControls?: boolean;
  /** 容器类名 */
  className?: string;
  /** 容器样式 */
  style?: CSSProperties;
  /** 视频类名 */
  videoClassName?: string;
  /** 视频样式 */
  videoStyle?: CSSProperties;
  /** 是否显示底部控件 */
  showControls?: boolean;
  /** 网页宽屏 */
  onFullWidthChange?: (fullWidth: boolean) => void;

  /** 显示上集切换按钮 */
  usePrevEpisode?: boolean;
  /** 显示下集切换按钮 */
  useNextEpisode?: boolean;
  /** 上一集 */
  prevEpisodeHref?: string;
  /** 下一集 */
  nextEpisodeHref?: string;
};
const Video: React.FC<VideoProps> = ({
  src,
  forwardSecond = 5,
  useKeyImg,
  onFullWidthChange,
  useKeyControls,
  className = "",
  style,
  videoClassName = "",
  videoStyle,
  showControls,
  usePrevEpisode,
  useNextEpisode,
  prevEpisodeHref,
  nextEpisodeHref,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ratio, setRatio] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [buffered, setBuffered] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  /** 是否卡顿 */
  const [loss, setLoss] = useState<boolean>(false);
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      setCurrentTime(video.currentTime);
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        setBuffered(bufferedEnd);
      }
      if (videoRef.current.currentTime === 0) {
        setIsInitialLoad(true);
      }
    }
  };

  /** 视频播放 & 暂停 */
  const handlePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [src]);

  /** 视频进度条移动 */
  const KeyImgPreviewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [left, setLeft] = useState<number>(0);
  /** 展示关键帧图片 */
  const [showKeyImg, setShowKeyImg] = useState<boolean>(false);
  const keyImgWidth = useMemo(() => (ratio < 1 ? 100 : 200), [ratio]);
  const handleProgressMove = (_val, left, width) => {
    setShowKeyImg(true);
    console.log(left, width, keyImgWidth);

    if (left < keyImgWidth / 2) {
      setLeft(0);
    } else {
      if (left < width - keyImgWidth / 2) {
        setLeft(left - keyImgWidth / 2);
      } else {
        setLeft(width - keyImgWidth);
      }
    }
    if (!videoRef.current || !KeyImgPreviewCanvasRef.current) return;
    const video = videoRef.current;
    const previewCanvas = KeyImgPreviewCanvasRef.current;
    const previewContext = previewCanvas.getContext("2d");
    previewContext.drawImage(
      video,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height
    );
  };

  /** 音量控制 */
  const [volume, setVolume] = useState<number>(100);
  const [lastVolume, setLastVolume] = useState<number>(100);
  const [muted, setMuted] = useState<boolean>(true);
  const volumeSliderRef = useRef<HTMLDivElement>(null);
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);

  const handleVolumeChange = (val: number) => {
    if (!videoRef.current) return;
    setVolume(val);
    videoRef.current.volume = val / 100;
  };

  useEffect(() => {
    if (volume !== 0) {
      setLastVolume(volume);
      setMuted(false);
      setShowVolumeSlider(volume < 100);
    }
    if (volume === 0) {
      setMuted(true);
    }
  }, [volume]);
  const handleMuteChange = () => {
    if (!videoRef.current) return;
    if (muted) {
      if (lastVolume > 0) {
        videoRef.current.volume = lastVolume / 100;
        setVolume(lastVolume);
      } else {
        videoRef.current.volume = 1;
        setVolume(100);
      }
    } else {
      videoRef.current.volume = 0;
      setVolume(0);
    }
    setMuted(!muted);
  };
  useEffect(() => {
    if (videoRef.current) videoRef.current.pause();
  }, [src]);

  useClickOutside(volumeSliderRef, () => {
    if (showVolumeSlider) {
      setShowVolumeSlider(false);
    }
  });

  /** 倍数 */
  const [rate, setRate] = useState<number>(1);
  const handleRateChange = useCallback((val, item) => {
    setRate(item.value);
    if (!videoRef.current) return;
    console.log(val, videoRef.current.playbackRate);

    videoRef.current.playbackRate = val;
  }, []);

  /** 循环 */
  const [loop, setLoop] = useState<boolean>(false);

  /** 画中画播放 */
  const handleSmallScreen = async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error("Error with Picture-in-Picture:", error);
    }
  };

  /** 网页宽屏屏 */
  const [fullWidth, setFullWidth] = useState<boolean>(false);

  /** 网页全屏 */
  const [fullView, setFullView] = useState<boolean>(false);

  /** 全屏播放 */
  const handleFullScreen = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  /** 监听键盘左右箭头、空格播放 */
  const [showBack, setShowBack] = useState<boolean>(false);
  const [showFront, setShowFront] = useState<boolean>(false);
  const [showCenterPlay, setShowCenterPlay] = useState<boolean>(false);
  useEffect(() => {
    if (showBack) {
      const timer = setTimeout(() => {
        setShowBack(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showBack]);
  useEffect(() => {
    if (showFront) {
      const timer = setTimeout(() => {
        setShowFront(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showFront]);
  useEffect(() => {
    if (showCenterPlay) {
      const timer = setTimeout(() => {
        setShowCenterPlay(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showCenterPlay]);

  useEffect(() => {
    if (!videoRef.current || !useKeyControls) return;
    const video = videoRef.current;
    const handleKeyDown = (event: any) => {
      event.preventDefault();
      if (event.code === "ArrowLeft" || event.key === "ArrowLeft") {
        if (video.paused) return;
        video.currentTime = Math.max(0, video.currentTime - forwardSecond);
        setCurrentTime(Math.max(0, video.currentTime - forwardSecond));
        setShowBack(true);
      }
      if (event.code === "ArrowRight" || event.key === "ArrowRight") {
        if (video.paused) return;
        video.currentTime = Math.min(
          video.duration,
          video.currentTime + forwardSecond
        );
        setCurrentTime(
          Math.min(video.duration, video.currentTime + forwardSecond)
        );
        setShowFront(true);
      }
      if (event.code === "Space" || event.key === "Space") {
        event.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        setShowCenterPlay(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <StyledLandVideoContainer
      className={`land-video-wrap ${error ? "error" : ""} ${fullView ? "fullView" : ""
        } ${className}`}
      style={{ aspectRatio: ratio && error ? `${ratio}` : "auto", ...style }}
    >
      {error ? (
        <Alert type="error" title="视频错误" direction="column" />
      ) : (
        <video
          ref={videoRef}
          src={src}
          loop={loop}
          onTimeUpdate={handleTimeUpdate}
          onWaiting={() => setLoss(true)}
          onCanPlay={() => setLoss(false)}
          onError={() => setError(true)}
          onLoadedMetadata={(e) => {
            setRatio(e.target?.clientWidth / e.target?.clientHeight);
            setDuration(e.target?.duration);
          }}
          style={videoStyle}
          className={`land-video ${videoClassName}`}
        />
      )}

      {!error && isInitialLoad && (
        <div
          className="absolute width-100 height-100 top-0 left-0"
          onClick={handlePlay}
        >
          <AffixContainer
            className="height-100"
            bcOption={{
              content: (
                <StyledLandVideoControlsContainer
                  className={`land-video-controls-wrap ${showControls ? "show" : ""
                    }`}
                >
                  {/* 进度条 */}
                  <>
                    <VideoProgressBar
                      curPercentage={currentTime / duration}
                      bufferPercentage={buffered / duration}
                      onClick={(val) => setCurrentTime(val * duration)}
                      onMove={(val, left, width) =>
                        handleProgressMove?.(val, left, width)
                      }
                      onMouseLeave={() => setShowKeyImg(false)}
                    />
                    {useKeyImg && showKeyImg && (
                      <div
                        className="land-video-controls-keyImg-container"
                        style={{ transform: `translateX(${left}px)` }}
                      >
                        <canvas
                          ref={KeyImgPreviewCanvasRef}
                          width={keyImgWidth}
                          height={keyImgWidth / ratio}
                        />
                      </div>
                    )}
                  </>

                  {/* 控制按钮 */}
                  <div className="land-video-controls-container">
                    <div className="land-video-controls-left">
                      {usePrevEpisode && (
                        <a
                          className="land-video-controls-button prev"
                          role="button"
                          href={prevEpisodeHref}
                        >
                          <Icon name="arrow-nav" size={20} strokeWidth={4} />
                        </a>
                      )}
                      <button
                        className="land-video-controls-button play"
                        aria-keyshortcuts="k"
                        data-title-no-tooltip="播放"
                        aria-label="播放 键盘快捷键 (space)"
                        title="播放 (space)"
                        onClick={handlePlay}
                      >
                        {videoRef.current?.paused ? (
                          <Icon name="video-pause" size={32} />
                        ) : (
                          <Icon name="video-play" size={20} />
                        )}
                      </button>
                      {useNextEpisode && (
                        <a
                          className="land-video-controls-button next"
                          role="button"
                          href={nextEpisodeHref}
                          title="下一个"
                        >
                          <Icon name="arrow-nav" size={20} strokeWidth={4} />
                        </a>
                      )}
                      <div className="land-video-controls-time">
                        {useFormateTime(currentTime)} /{" "}
                        {useFormateTime(duration)}
                      </div>
                      <div className="land-video-controls-volume-container">
                        <button
                          className="land-video-controls-button volume"
                          onClick={handleMuteChange}
                        >
                          {muted ? (
                            <Icon
                              name="volume-muted"
                              size={20}
                              strokeWidth={2}
                            />
                          ) : (
                            <Icon
                              name="volume"
                              className={`${volume < 50 ? "small" : ""}`}
                              size={20}
                              strokeWidth={2}
                            />
                          )}
                        </button>
                        <div
                          ref={volumeSliderRef}
                          className={`land-video-volume-slider ${showVolumeSlider ? "show" : ""
                            }`}
                        >
                          <Slider
                            height={4}
                            value={volume}
                            max={100}
                            step={1}
                            onChange={(val) => handleVolumeChange(val)}
                            defaultBg="rgba(255,255,255,0.68)"
                            activeBg="rgba(255,255,255,1)"
                            thumbSize={12}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="land-video-controls-right">
                      <button className="land-video-controls-button setting hover-pop">
                        <Icon name="setting" size={20} strokeWidth={4} />
                        <div className="land-video-setting-panel">
                          <div className="land-video-setting-content">
                            <VideoSetting
                              rateValue={rate}
                              onRateChange={(val, item) =>
                                handleRateChange?.(val, item)
                              }
                              loop={loop}
                              onLoopChange={() => setLoop(!loop)}
                            />
                          </div>
                        </div>
                      </button>
                      <button
                        className="land-video-controls-button small-screen hover-pop"
                        onClick={handleSmallScreen}
                      >
                        <Icon
                          name="video-small-screen"
                          size={20}
                          strokeWidth={4}
                        />
                        <Pop content="画中画模式" theme="dark" />
                      </button>
                      {onFullWidthChange && (
                        <button
                          className="land-video-controls-button full-width hover-pop"
                          onClick={() => {
                            setFullWidth(!fullWidth);
                            onFullWidthChange?.(!fullWidth);
                          }}
                        >
                          <Icon
                            name="video-full-width"
                            size={20}
                            strokeWidth={2}
                            reverse={fullWidth}
                          />
                          <Pop content="宽屏模式" theme="dark" />
                        </button>
                      )}
                      <button
                        className="land-video-controls-button full-view hover-pop"
                        onClick={() => setFullView(!fullView)}
                      >
                        {fullView ? (
                          <Icon name="zoom-out" size={20} strokeWidth={4} />
                        ) : (
                          <Icon name="zoom-in" size={20} strokeWidth={4} />
                        )}
                        <Pop
                          content={
                            fullView ? "退出网页全屏模式" : "网页全屏模式"
                          }
                          theme="dark"
                        />
                      </button>
                      <button
                        className="land-video-controls-button full-screen hover-pop"
                        onClick={handleFullScreen}
                      >
                        <Icon name="zoom-in-arrow" size={20} strokeWidth={4} />
                        <Pop content="全屏模式" theme="dark" />
                      </button>
                    </div>
                  </div>
                </StyledLandVideoControlsContainer>
              ),
              gap: 0,
            }}
            centerOption={{
              content:
                loss && !isInitialLoad ? (
                  <Loading size={32} color="white" strokeSize={4} />
                ) : (
                  <StyledVideoTagsContainer className="land-video-tags-container">
                    {videoRef.current?.paused ? (
                      <Icon name="video-pause" size={32} />
                    ) : (
                      <Icon name="video-play" size={20} />
                    )}
                  </StyledVideoTagsContainer>
                ),
              style: {
                opacity:
                  showCenterPlay || loss || videoRef.current?.paused ? 1 : 0,
                pointerEvents: "none",
              },
            }}
            lcOption={{
              content: (
                <StyledVideoTagsContainer className="land-video-tags-container">
                  <Icon name="arrow-double" className="back" size={28} />
                  {forwardSecond}秒
                </StyledVideoTagsContainer>
              ),
              style: { opacity: showBack ? 1 : 0 },
            }}
            rcOption={{
              content: (
                <StyledVideoTagsContainer className="land-video-tags-container">
                  <Icon name="arrow-double" className="front" size={28} />
                  {forwardSecond}秒
                </StyledVideoTagsContainer>
              ),
              style: { opacity: showFront ? 1 : 0 },
            }}
          ></AffixContainer>
        </div>
      )}
    </StyledLandVideoContainer>
  );
};

const StyledLandVideoControlsContainer = styled.div`
  &.land-video-controls-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0.75rem 0.75rem;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s linear;
    &.show {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .land-video-controls-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  .land-video-controls-left,
  .land-video-controls-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .land-video-controls-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 2rem;
    height: 2rem;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
    cursor: pointer;
    transform-origin: center center;
    transition: color 0.2s linear;
    &:hover:not(.disabled) {
      color: rgba(255, 255, 255, 1);
    }
    svg {
      transition: transform 0.2s linear;
    }
    path {
      transition: d 0.2s linear;
    }
    &.prev {
      transform: rotate(180deg);
    }
    &.full-screen,
    &.small-screen,
    &.full-view,
    &.full-width {
      &:hover svg {
        transform: scale(1.1);
      }
    }
    &.setting {
      &:hover svg {
        transform: rotate(15deg);
      }
      .land-video-setting-panel {
        position: absolute;
        bottom: 100%;
        padding-bottom: 24px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s linear;
        .land-video-setting-content {
          padding: 12px;
          background-color: rgba(0, 0, 0, 0.68);
          border-radius: 8px;
        }
      }
      &:hover .land-video-setting-panel {
        opacity: 1;
        pointer-events: auto;
      }
    }
    &.disabled {
      color: rgba(255, 255, 255, 0.36);
      cursor: not-allowed;
    }
  }
  .land-video-controls-time {
    font-size: 0.875rem;
    white-space: nowrap;
  }
  .land-video-controls-volume-container {
    position: relative;
    display: flex;
    align-items: center;
    &:hover .land-video-volume-slider {
      width: 60px;
      pointer-events: auto;
    }
    .land-video-volume-slider {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 0px;
      height: 28px;
      overflow: hidden;
      pointer-events: none;
      transition: width 0.2s linear;
      &.show {
        width: 60px;
      }
    }
    .volume svg.small {
      path:last-of-type {
        opacity: 0;
        transition: opacity 0.2s linear;
      }
    }
  }
  .land-video-controls-keyImg-container {
    position: absolute;
    left: 0;
    bottom: 100%;
    canvas {
      border-radius: 8px;
      overflow: hidden;
    }
  }
`;

const StyledLandVideoContainer = styled.div`
  &.land-video-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &.error {
      background-color: var(--color-bg-1);
      border-radius: 12px;
    }
    &.fullView {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 1);
      z-index: var(--zIndex-5);
    }
  }
  .land-video {
    max-width: 100%;
    max-height: 100%;
  }
  &:hover {
    ${StyledLandVideoControlsContainer} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

const StyledVideoTagsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 3.375rem;
    height: 3.375rem;
    font-size: 0.75rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    color: rgba(255,255,255,0.8);
    transition: opacity 0.2s linear;
    svg{
      color: rgba(255,255,255);
    }
    .arrow-double{
        &.back{
          transform: rotate(90deg);
          path:first-of-type{
            animation: flash 800ms linear infinite;
          }
          path:last-of-type{
            animation: flash 800ms 400ms linear infinite;
          }
        }
        &.front{
          transform: rotate(-90deg);
          path:last-of-type{
            animation: flash 800ms linear infinite;
          }
          path:first-of-type{
            animation: flash 800ms 400ms linear infinite;
          }
        }
        @keyframes flash {
          0%{
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
        }
    }
`;

export default Video;
