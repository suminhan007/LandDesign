import React, { useRef } from "react";
import styled from "styled-components";

export type WatermarkProps = {
  /** 水印内容 */
  content?: React.ReactNode | string;
  /** 图片水印内容 */
  url?: string;
};

const Watermark: React.FC<WatermarkProps> = ({ content, url }) => {
  const watermarkRef = useRef<HTMLDivElement>(null);

  return (
    <StyledLandWatermark
      ref={watermarkRef}
      className="absolute top-0 left-0 grid p-32 width-100 height-100 overflow-hidden"
    >
      {Array.from({ length: 20 }).map((_i, index) =>
        url ? (
          <img key={index} className="land-watermark-item img" />
        ) : (
          <div className="land-watermark-item" key={index}>
            {content}
          </div>
        )
      )}
    </StyledLandWatermark>
  );
};

const StyledLandWatermark = styled.div`
  gap: 64px;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  .land-watermark-item {
    transform: rotate(-45deg);
    color: var(--color-border-3);
    font-size: 12px;
    white-space: nowrap;
  }
`;

export default Watermark;
