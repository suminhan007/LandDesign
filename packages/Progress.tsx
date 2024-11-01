import React, { CSSProperties } from "react";
import styled from "styled-components";

type ProgressProps = {
  /** 当前进度百分比 */
  value?: number;
  /** 隐藏进度条数值 */
  hideLabel?: boolean;
  style?: CSSProperties;
  className?: string;
};
const Progress: React.FC<ProgressProps> = ({
  value = 0.6,
  hideLabel,
  style,
  className = '',
}) => {
  return <StyledLandProgress className={`land-progress ${className}`} style={style}>
    <div className="land-progress-content">
      {!hideLabel && <div className="land-progress-label" style={{ left: `${value * 100}%` }}>{value * 100}%</div>}
      <div className="land-progress-bar">
        <div className="land-progress-bar-finished" style={{ transform: `scaleX(${value})` }}></div>
      </div>
    </div>
  </StyledLandProgress>;
};

const StyledLandProgress = styled.div`
  width: 100%;
  .land-progress-content{
    position: relative;
    width: 100%;
    .land-progress-label{
      position: absolute;
      bottom: 100%;
      left: 0;
      font-size: 14px;
      color: var(--color-text-3);
      transform: translate(-50%,-4px);
    }
    .land-progress-bar{
      position: relative;
      width: 100%;
      height: 12px;
      border-radius: 12px;
      background-color: var(--color-bg-3);
      overflow: hidden;
      .land-progress-bar-finished{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color-primary-6);
        transform-origin: left;
      }
    }
  }
  
`;
export default Progress;
