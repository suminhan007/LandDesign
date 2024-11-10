// 方向 & 箭头类
import { IconProps } from ".";
export const IconArrowLine: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 24,
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
      className={`arrow-line ${className}`}
    >
      <path
        d="M24 42V6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 30L24 42L12 30"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconArrowDouble: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 24,
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
      className={`arrow-double ${className}`}
    >
      <path
        d="M31 17L24 24L17 17"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 26L24 33L17 26"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconArrow: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 24,
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
      className={`arrow ${className}`}
    >
      <path
        d="M36 18L24 30L12 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconArrowTriangle: React.FC<IconProps> = ({
  fill = "currentcolor",
  stroke = "currentcolor",
  size = 24,
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
      className={`arrow-triangle ${className}`}
    >
      <path
        d="M36 19L24 31L12 19H36Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconArrowTo: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 24,
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
      className={`arrow-to ${className}`}
    >
      <path
        d="M24.0083 33.8995V6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 22L24 34L12 22"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 42H12"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconArrowNav: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 24,
  strokeWidth = 2,
  style,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`arrow-nav ${className}`}
  >
    <path
      d="M14 12L26 24L14 36"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 12V36"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
