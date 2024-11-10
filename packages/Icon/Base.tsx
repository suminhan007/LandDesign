import { IconProps } from ".";

export const IconSingleNumber: React.FC<IconProps> = ({
  stroke = "currentColor",
  size = 24,
  fill = "var(--color-text-1)",
  strokeWidth,
  value,
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
    className={`single-number ${className}`}
  >
    <circle
      cx="12"
      cy="12"
      r={12}
      fill={strokeWidth ? "none" : fill}
      stroke={strokeWidth ? stroke : "none"}
      strokeWidth={strokeWidth}
    />
    <text x="9" y="16" fontSize={12} fill={strokeWidth ? stroke : "white"}>
      {value}
    </text>
  </svg>
);

export const IconDec: React.FC<IconProps> = ({
  size = 16,
  stroke = "currentColor",
  className = "",
  onClick,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`dec ${className}`}
    onClick={onClick}
  >
    <path
      d="M10.5 24L38.5 24"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
