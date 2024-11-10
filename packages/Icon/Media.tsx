// 媒体类
import { IconProps } from ".";

export const IconImage: React.FC<IconProps> = ({
  stroke = "currentColor",
  strokeWidth = 2,
  size = 24,
  style,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`image ${className}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const IconVideoPlay: React.FC<IconProps> = ({
  size = 24,
  fill = "currentColor",
  style,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`video-play ${className}`}
  >
    <path
      d="M16.875 3.75V16.25C16.875 16.5815 16.7433 16.8995 16.5089 17.1339C16.2745 17.3683 15.9565 17.5 15.625 17.5H12.5C12.1685 17.5 11.8505 17.3683 11.6161 17.1339C11.3817 16.8995 11.25 16.5815 11.25 16.25V3.75C11.25 3.41848 11.3817 3.10054 11.6161 2.86612C11.8505 2.6317 12.1685 2.5 12.5 2.5H15.625C15.9565 2.5 16.2745 2.6317 16.5089 2.86612C16.7433 3.10054 16.875 3.41848 16.875 3.75ZM7.5 2.5H4.375C4.04348 2.5 3.72554 2.6317 3.49112 2.86612C3.2567 3.10054 3.125 3.41848 3.125 3.75V16.25C3.125 16.5815 3.2567 16.8995 3.49112 17.1339C3.72554 17.3683 4.04348 17.5 4.375 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V3.75C8.75 3.41848 8.6183 3.10054 8.38388 2.86612C8.14946 2.6317 7.83152 2.5 7.5 2.5Z"
      fill={fill}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export const IconVideoPause: React.FC<IconProps> = ({
  size = 24,
  fill = "currentColor",
  style,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`video-pause ${className}`}
  >
    <path
      d="M14.3077 9.79704C15.2308 10.3317 15.2308 11.6683 14.3077 12.203L8.07693 15.8118C7.15385 16.3465 6 15.6782 6 14.6089V7.39113C6 6.32183 7.15385 5.65352 8.07692 6.18817L14.3077 9.79704Z"
      fill={fill}
      strokeLinejoin="round"
    />
  </svg>
);

/** 视频音量 */
export const IconVolume: React.FC<IconProps> = ({
  stroke = "currentColor",
  strokeWidth = 2,
  size = 24,
  style,
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`volume ${className}`}
    onClick={onClick}
  >
    <path
      d="M12 3V21L5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925L12 3Z"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M16 7.5C16.3116 7.77825 16.5941 8.08985 16.8421 8.4294C17.5694 9.4252 18 10.6611 18 12C18 13.3273 17.5768 14.5534 16.8609 15.5447C16.6084 15.8943 16.3196 16.2147 16 16.5"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M17.1172 20.5931C20.041 18.8479 21.9992 15.6527 21.9992 12.0002C21.9992 8.40447 20.1014 5.25197 17.2527 3.48975"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

/** 视频静音 */
export const IconVolumeMuted: React.FC<IconProps> = ({
  stroke = "currentColor",
  strokeWidth = 4,
  size = 24,
  style,
  className = "",
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    style={style}
    className={`volume-muted ${className}`}
  >
    <path
      d="M12 3V21L5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925L12 3Z"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M20.3674 10.1431L16.1248 14.3857"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M16.1248 10.1431L20.3674 14.3857"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export const IconVideoSmallScreen: React.FC<IconProps> = ({
  stroke = "currentColor",
  size = 24,
  fill,
  strokeWidth = 2,
  style,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`video-small-screen ${className}`}
  >
    <path
      d="M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16"
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M42 24H26C24.8954 24 24 24.8954 24 26V38C24 39.1046 24.8954 40 26 40H42C43.1046 40 44 39.1046 44 38V26C44 24.8954 43.1046 24 42 24Z"
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const IconVideoFullWidth: React.FC<IconProps> = ({
  stroke = "currentColor",
  size = 24,
  fill,
  strokeWidth = 2,
  style,
  className = "",
  reverse,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`video-full-width ${className}`}
  >
    <path
      d={
        reverse
          ? "M18.5459 15.364L15.3639 12.182L18.5459 9.00005"
          : "M15.1816 9L18.3636 12.182L15.1816 15.364"
      }
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d={
        reverse
          ? "M5.18164 9.00024L8.36362 12.1822L5.18164 15.3642"
          : "M8.18164 15.364L4.99966 12.182L8.18164 9.00005"
      }
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <rect
      x={strokeWidth / 2}
      y="4.5"
      width={24 - strokeWidth}
      height="16"
      rx="2"
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

export const IconLoop: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={style}
      className={`loop ${className}`}
    >
      <path
        d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 7L44 13L38 19"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};