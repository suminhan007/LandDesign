import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Loading from "./Loading";

export type ImgProps = {
  url?: string;
  errorUrl?: string;
  alt?: string;
  ratio?: number;
  loadingComponent?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};
const Img: React.FC<ImgProps> = ({
  url,
  errorUrl,
  alt,
  ratio = 1,
  loadingComponent,
  style,
  className = "",
}) => {
  const ImgRef = useRef<HTMLImageElement>(null);
  const [imgLoading, setImgLoading] = useState<boolean>(true);
  const [loadDefaultImg, setLoadDefaultImg] = useState<boolean>(false);
  const handleLoad = () => {
    setTimeout(() => {
      setImgLoading(false);
    }, 300);
  };
  const handleError = () => {
    setImgLoading(false);
    setLoadDefaultImg(true);
  };

  useEffect(() => {
    const imageElement = ImgRef.current;

    if (!imageElement) return;
    if (imageElement.complete) {
      setImgLoading(false);
    }
    imageElement?.addEventListener("load", handleLoad);
    imageElement?.addEventListener("error", handleError);
    return () => {
      imageElement?.removeEventListener("load", handleLoad);
      imageElement?.removeEventListener("error", handleError);
    };
  }, []);
  return imgLoading ? (
    <div
      className="flex items-center justify-center bg-gray width-100 radius-6"
      style={{ aspectRatio: `${ratio}` }}
    >
      {loadingComponent || <Loading />}
    </div>
  ) : loadDefaultImg ? (
    <img src={errorUrl} alt={alt} style={style} className={className} />
  ) : (
    <img ref={ImgRef} src={url} alt={alt} style={style} className={className} />
  );
};

export default Img;
