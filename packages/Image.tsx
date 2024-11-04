import React, { useRef, useState, CSSProperties } from "react";
import styled from "styled-components";
import State from "./State";

export type ImageProps = {
  /* 图片地址 */
  url?: string;
  /* 组件级 class */
  className?: string;
  /* 图片 class */
  imgClassName?: string;
  /* 组件级 style */
  style?: CSSProperties;
  /* 图片 style */
  imgStyle?: CSSProperties;
  /* 比例 */
  ratio?: number;
};

const Image: React.FC<ImageProps> = ({
  url,
  className,
  imgClassName,
  imgStyle,
  style,
  ratio,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoading, setImgLoading] = useState<boolean>(true);
  const [loadDefaultImg, setLoadDefaultImg] = useState<boolean>(false);

  return (
    <StyledLandImage
      className={`${imgLoading ? "loading" : ""
        } relative flex items-center justify-center ${imgLoading || loadDefaultImg ? "bg-gray radius-6 overflow-hidden" : ""
        } ${className}`}
      style={{
        aspectRatio:
          ratio && (imgLoading || loadDefaultImg) ? `${ratio}` : "auto",
        ...style,
      }}
    >
      {loadDefaultImg && <State type="offline" title='加载失败' />}
      <img
        ref={imgRef}
        src={url}
        className={`${imgLoading ? "opacity-0" : "opacity-1"
          } transition ${imgClassName}`}
        style={{ zIndex: "1", maxWidth: "100%", ...imgStyle }}
        onLoad={() => setImgLoading(false)}
        onError={() => setLoadDefaultImg(true)}
      />
    </StyledLandImage>
  );
};
const StyledLandImage = styled.div`
  &.loading {
    background: linear-gradient(90deg, #f2f4f7 25%, #edeff2 37%, #f2f4f7 63%);
    animation: skeleton-loading 1.4s ease infinite;
    @keyframes skeleton-loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }
`;
export default Image;
