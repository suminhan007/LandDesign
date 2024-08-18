import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import Icon from "./Icon";

export type ImageProps = {
  url?: string;
  errorUrl?: string;
  alt?: string;
  ratio?: number;
  width?: number | string;
  loadingComponent?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};
const Image: React.FC<ImageProps> = ({
  url,
  errorUrl,
  alt,
  ratio = 1,
  width = "100%",
  loadingComponent,
  style,
  className = "",
}) => {
  const ImageRef = useRef<HTMLImageElement>(null);
  const [imgLoading, setImageLoading] = useState<boolean>(true);
  const [loadDefaultImage, setLoadDefaultImage] = useState<boolean>(false);
  const handleLoad = () => {
    setTimeout(() => {
      setImageLoading(false);
    }, 300);
  };
  const handleError = () => {
    setImageLoading(false);
    setLoadDefaultImage(true);
  };

  useEffect(() => {
    const imageElement = ImageRef.current;

    if (!imageElement) return;
    if (imageElement.complete) {
      setImageLoading(false);
    }
    imageElement?.addEventListener("load", handleLoad);
    imageElement?.addEventListener("error", handleError);
    return () => {
      imageElement?.removeEventListener("load", handleLoad);
      imageElement?.removeEventListener("error", handleError);
    };
  }, []);
  return (
    <div
      className="flex items-center justify-center bg-gray radius-6"
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        aspectRatio: imgLoading ? `${ratio}` : "auto",
      }}
    >
      {imgLoading &&
        (loadingComponent || (
          <Loading
            color="var(--color-text-3)"
            className="absolute position-center"
          />
        ))}
      {loadDefaultImage ? (
        errorUrl ? (
          <img
            ref={ImageRef}
            src={errorUrl}
            alt={alt}
            style={{
              width: "100%",
              ...style,
            }}
            className={className}
          />
        ) : (
          <Icon name="error-fill" fill="var(--color-red-3)" size={32} />
        )
      ) : (
        <img
          ref={ImageRef}
          src={url}
          alt={alt}
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            ...style,
          }}
          className={className}
        />
      )}
    </div>
  );
};

export default Image;
