import React, { CSSProperties } from "react";
import styled from "styled-components";

type SkeletonProps = {
  /** 骨架屏宽度 */
  width?: number | string;
  /** 骨架屏高度 */
  height?: number | string;
  /** 骨架屏起始渐变色 */
  start?: string;
  /** 骨架屏结束渐变色 */
  stop?: string;
  style?: CSSProperties;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 24,
  start = "#f2f4f7",
  stop = "#edeff2",
  style,
  className = "",
}) => {
  return (
    <StyledLandSkeleton
      className={className}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        backgroundSize: "400% 100%",
        ...style,
      }}
      start={start}
      stop={stop}
    ></StyledLandSkeleton>
  );
};

const StyledLandSkeleton = styled.div<{
  start?: string;
  stop?: string;
}>`
  background: ${(props) =>
    `linear-gradient(90deg, ${props.start} 25%, ${props.stop} 37%, ${props.start} 63%)`};
  animation: skeleton-loading 1.4s ease infinite;
  @keyframes skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export default Skeleton;
