// 设备 & 工具类

import { IconProps } from ".";

export const IconCamera: React.FC<IconProps> = ({
  stroke = "currentcolor",
  strokeWidth = 2,
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={`color-picker ${className}`}
    >
      <path
        d="M15 12L18 6H30L33 12H15Z"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="12"
        width="40"
        height="30"
        rx="3"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};
