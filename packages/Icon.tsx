import { CSSProperties } from "react";

export type IconProps = {
  fill?: string;
  stroke?: string;
  size?: number;
  strokeWidth?: number;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
};

// 方向类图标
const IconArrowLine: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = '',
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

const IconArrowDouble: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = '',
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

const IconArrow: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = '',
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

const IconArrowTriangle: React.FC<IconProps> = ({
  fill = "currentcolor",
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = '',
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

const IconArrowTo: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = '',
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


const IconArrowNav: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={style}
    className={`arrow-nav ${className}`}
  >
    <path d="M14 12L26 24L14 36"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M34 12V36"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconIncrease: React.FC<IconProps> = ({
  fill = "currentcolor",
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  style,
  className = "",
}) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`increase ${className}`}
    style={style}
  >
    <path
      d="M15 12h4.5L12 2 4.5 12H9v10h6V12z"
      fill={strokeWidth === 0 ? fill : "none"}
      stroke={strokeWidth === 0 ? "none" : stroke}
      strokeWidth={strokeWidth}
    ></path>
  </svg>
);

const IconToggle: React.FC<IconProps> = ({
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
      className={`toggle ${className}`}
    >
      <path
        d="M6 9L42 9"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 19L42 19"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 26L24 40L42 26"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconCollapse: React.FC<IconProps> = ({
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
      className={`collapse ${className}`}
    >
      <path
        d="M44 20H28V4"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 28H20V44"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconCollection: React.FC<IconProps> = ({
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
      className={`collection ${className}`}
    >
      <path
        d="M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.0427 3.95386L42.021 8.02038L38.0427 11.9612"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconSearch: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 20,
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
    className={`search ${className}`}
  >
    <path
      d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M33.2216 33.2217L41.7069 41.707"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconZoomInArrow: React.FC<IconProps> = ({
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
      className={`zoom-in-arrow ${className}`}
    >
      <path
        d="M6 6L16 15.8995"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 41.8995L16 32"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.0001 41.8995L32.1006 32"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.8995 6L32 15.8995"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 6H42V15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 33V42H33"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 42H6V33"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15V6H15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconZoomOutArrow: React.FC<IconProps> = ({
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
      className={`zoom-out-arrow ${className}`}
    >
      <path
        d="M6 6L16 15.8995"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 41.8995L16 32"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.0001 41.8995L32.1006 32"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.8995 6L32 15.8995"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 7V16H41"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7V16H7"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 41V32H7"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 41V32H40.8995"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconZoomIn: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
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
    className={`zoom-in ${className}`}
  >
    <path
      d="M33 6H42V15"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 33V42H33"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 42H6V33"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 15V6H15"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconZoomOut: React.FC<IconProps> = ({
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
      className={`zoom-out ${className}`}
    >
      <path
        d="M33 6V15H42"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6V15H6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 42V33H6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 42V33H41.8995"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconLoop: React.FC<IconProps> = ({
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

const IconDownload: React.FC<IconProps> = ({
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 3,
  style,
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={style}
      className={`download ${className}`}
      onClick={onClick}
    >
      <path
        d="M6 24.0083V42H42V24"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 23L24 32L15 23"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9917 6V32"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconOut: React.FC<IconProps> = ({
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
      className={`out ${className}`}
    >
      <path
        d="M23.9917 6H6V42H24"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 33L42 24L33 15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 23.9917H42"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconReload: React.FC<IconProps> = ({
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
      className={`reload ${className}`}
    >
      <path
        d="M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 8V17H33"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconUndo: React.FC<IconProps> = ({
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
      className={`undo ${className}`}
    >
      <path
        d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9V17H14"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconSort: React.FC<IconProps> = ({
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
      className={`sort ${className}`}
    >
      <path
        d="M19 6V42"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17.8994L19 5.89941"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 42.1006V6.10059"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 42.1006L41 30.1006"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconBack: React.FC<IconProps> = ({
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
      className={`back ${className}`}
    >
      <path
        d="M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 28L10 33L4 25"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconAhead: React.FC<IconProps> = ({
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
      className={`ahead ${className}`}
    >
      <path
        d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 28L38 33L44 25"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconDrag: React.FC<IconProps> = ({
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
      className={`drag ${className}`}
    >
      <path
        d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 28L38 33L44 25"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconRefresh: React.FC<IconProps> = ({
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
      className={`refresh ${className}`}
    >
      <path
        d="M42 8V24"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 24L6 40"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

//提示类
const IconCheckStroke: React.FC<IconProps> = ({
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
      className={`check-stroke ${className}`}
    >
      <path
        d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M16 24L22 30L34 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconCheckFill: React.FC<IconProps> = ({
  fill = "currentcolor",
  size = 16,
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
      className={`check-fill ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z"
        fill={fill}
      />
    </svg>
  );
};

const IconCheck: React.FC<IconProps> = ({
  fill = "currentcolor",
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
      className={`check ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const IconErrorStroke: React.FC<IconProps> = ({
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
      className={`error-stroke ${className}`}
    >
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M29.6567 18.3432L18.343 29.6569"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3433 18.3432L29.657 29.6569"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconErrorFill: React.FC<IconProps> = ({
  fill = "currentcolor",
  size = 16,
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
      className={`error-fill ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z"
        fill={fill}
      />
    </svg>
  );
};

const IconError: React.FC<IconProps> = ({
  fill = "currentcolor",
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
      className={`error ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const IconInfoStroke: React.FC<IconProps> = ({
  size = 16,
  stroke = "currentcolor",
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
      className={`info-stroke ${className}`}
    >
      {/* <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M29.6567 18.3432L18.343 29.6569" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.3433 18.3432L29.657 29.6569" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /> */}
      <path
        d="M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

const IconInfoFill: React.FC<IconProps> = ({
  fill = "currentcolor",
  size = 16,
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
      className={`info-fill ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z"
        fill={fill}
      />
    </svg>
  );
};

const IconInfo: React.FC<IconProps> = ({
  fill = "currentcolor",
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
      className={`info ${className}`}
    >
      <path
        d="M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const IconAttentionStroke: React.FC<IconProps> = ({
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
      className={`attention-stroke ${className}`}
    >
      <path
        d="M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const IconAttentionFill: React.FC<IconProps> = ({
  fill = "currentcolor",
  size = 16,
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
      className={`attention-fill ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z"
        fill={fill}
      />
    </svg>
  );
};

const IconAttention: React.FC<IconProps> = ({
  fill = "currentcolor",
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
      className={`attention ${className}`}
    >
      <path
        d="M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const IconQuestionStroke: React.FC<IconProps> = ({
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
      className={`question-stroke ${className}`}
    >
      <path
        d="M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const IconQuestionFill: React.FC<IconProps> = ({
  fill = "currentcolor",
  size = 16,
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
      className={`question-fill ${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z"
        fill={fill}
      />
    </svg>
  );
};

const IconQuestion: React.FC<IconProps> = ({
  fill = "currentcolor",
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
      className={`question ${className}`}
    >
      <path
        d="M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z"
        fill={strokeWidth === 0 ? fill : "none"}
        stroke={strokeWidth === 0 ? "none" : stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const IconFile: React.FC<IconProps> = ({
  size = 16,
  stroke = "currentcolor",
  strokeWidth = 4,
  className = "",
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`file ${className}`}
      style={style}
    >
      <path
        d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M43 22H5"
        stroke={stroke}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconMore: React.FC<IconProps> = ({
  size = 16,
  fill = "currentcolor",
  className = "",
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`more ${className}`}
      style={style}
    >
      <circle cx="12" cy="24" r="4" fill={fill} />
      <circle cx="24" cy="24" r="4" fill={fill} />
      <circle cx="36" cy="24" r="4" fill={fill} />
    </svg>
  );
};

const IconMoreLine: React.FC<IconProps> = ({
  size = 16,
  stroke = "currentcolor",
  strokeWidth = 4,
  className = "",
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`more-line ${className}`}
      style={style}
    >
      <path
        d="M7.94971 11.9497H39.9497"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.94971 23.9497H39.9497"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.94971 35.9497H39.9497"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconAdd: React.FC<IconProps> = ({
  size = 16,
  stroke = "currentcolor",
  strokeWidth,
  className = "",
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`add ${className}`}
      style={style}
    >
      <path
        d="M24.0605 10L24.0239 38"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 24L38 24"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

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

const IconClear: React.FC<IconProps> = ({
  size = 16,
  stroke = "currentcolor",
  strokeWidth = 2,
  className = "",
  style,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`clear ${className}`}
      style={style}
      onClick={onClick}
    >
      <path
        d="M14 14L34 34"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 34L34 14"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 应用
const IconApplication: React.FC<IconProps> = ({
  size = 20,
  fill = "currentcolor",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`application ${className}`}
    >
      <path
        d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"
        fill={fill}
      />
      <path
        d="M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z"
        fill={fill}
      />
      <path
        d="M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z"
        fill={fill}
      />
      <path
        d="M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z"
        fill={fill}
      />
      <path
        d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
        fill={fill}
      />
      <path
        d="M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z"
        fill={fill}
      />
      <path
        d="M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z"
        fill={fill}
      />
      <path
        d="M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z"
        fill={fill}
      />
      <path
        d="M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z"
        fill={fill}
      />
    </svg>
  );
};

// 上传
const IconUpload: React.FC<IconProps> = ({
  size = 20,
  stroke = "currentcolor",
  strokeWidth = 3,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`upload ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 24.0083V42H42V24"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 15L24 6L15 15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9917 32V6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconClose: React.FC<IconProps> = ({
  size = 20,
  stroke = "currentcolor",
  strokeWidth = 2,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`close ${className}`}
    >
      <path
        d="M14 14L34 34"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 34L34 14"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconCloseCircle: React.FC<IconProps> = ({
  fill,
  stroke = "currentcolor",
  size = 20,
  strokeWidth = 2,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`close-circle ${className}`}
    >
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill={fill ? fill : "none"}
        stroke={fill ? fill : stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M29.6567 18.3432L18.343 29.6569"
        stroke={fill ? "#fff" : "none"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3433 18.3432L29.657 29.6569"
        stroke={fill ? "white" : "none"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconColorPicker: React.FC<IconProps> = ({
  fill = "currentcolor",
  size = 20,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={`color-picker ${className}`}
    >
      <path
        d="M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z"
        fill={fill}
      ></path>
    </svg>
  );
};

const IconCopy: React.FC<IconProps> = ({
  fill,
  stroke = "currentcolor",
  size = 16,
  strokeWidth = 2,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`copy ${className}`}
    >
      <path
        d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163"
        fill={fill ? fill : "none"}
        stroke={fill ? fill : stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z"
        fill={fill ? fill : "none"}
        stroke={fill ? fill : stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconHome: React.FC<IconProps> = ({
  stroke = "currentColor",
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
      className={`home ${className}`}
    >
      <path
        d="M9 18V42H39V18L24 6L9 18Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 29V42H29V29H19Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconLight: React.FC<IconProps> = ({
  stroke = "currentColor",
  size = 24,
  strokeWidth = 2,
  fill,
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
    className={`light ${className}`}
  >
    <path
      d="M9.15039 9.15088L11.3778 11.3783"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 24H6.15"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.15039 38.8495L11.3778 36.6221"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.8495 38.8495L36.6221 36.6221"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44.9996 24H41.8496"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.8495 9.15088L36.6221 11.3783"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 3V6.15"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M24 45.0001V41.8501"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconDark: React.FC<IconProps> = ({
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
    className={`dark ${className}`}
  >
    <path
      d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

const IconSetting: React.FC<IconProps> = ({
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
    className={`setting ${className}`}
  >
    <path
      d="M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z"
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"
      fill={fill ? fill : "none"}
      stroke={fill ? fill : stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

const IconVideoPlay: React.FC<IconProps> = ({
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

const IconVideoPause: React.FC<IconProps> = ({
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
const IconVolume: React.FC<IconProps> = ({
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
    viewBox="0 0 24 24"
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
const IconVolumeMuted: React.FC<IconProps> = ({
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

const IconVideoSmallScreen: React.FC<IconProps> = ({
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

const IconVideoFullWidth: React.FC<IconProps> = ({
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

const IconAvatar: React.FC<IconProps> = ({
  stroke = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`avatar ${className}`}
  >
    <circle
      cx="24"
      cy="12"
      r="8"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconDelete: React.FC<IconProps> = ({
  stroke = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`delete ${className}`}
  >
    <path
      d="M9 10V44H39V10H9Z"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M20 20V33"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 20V33"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10H44"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10L19.289 4H28.7771L32 10H16Z"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
  </svg>
);

const IconTag: React.FC<IconProps> = ({
  stroke = "currentColor",
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
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`tag ${className}`}
  >
    <path
      d="M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
      fill={stroke}
    />
  </svg>
);

const IconSingleNumber: React.FC<IconProps> = ({
  stroke = "currentColor",
  size = 24,
  fill = 'var(--color-text-1)',
  strokeWidth,
  value,
  style,
  className = "",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={`single-number ${className}`}>
    <circle cx="12" cy="12" r={12} fill={strokeWidth ? 'none' : fill} stroke={strokeWidth ? stroke : 'none'} strokeWidth={strokeWidth} />
    <text x='9' y='16' fontSize={12} fill={strokeWidth ? stroke : 'white'}>{value}</text>
  </svg>

);

export type IconDefaultProps = {
  name: string;
} & IconProps;

const Icon: React.FC<IconDefaultProps> = ({ name, ...restProps }) => {
  switch (name) {
    case "arrow-line":
      return <IconArrowLine {...restProps} />;
      break;
    case "arrow-double":
      return <IconArrowDouble {...restProps} />;
      break;
    case "arrow":
      return <IconArrow {...restProps} />;
      break;
    case "arrow-triangle":
      return <IconArrowTriangle {...restProps} />;
      break;
    case "arrow-to":
      return <IconArrowTo {...restProps} />;
      break;
    case "arrow-nav":
      return <IconArrowNav {...restProps} />;
      break;
    case "arrow-increase":
      return <IconIncrease {...restProps} />;
      break;
    case "toggle":
      return <IconToggle {...restProps} />;
      break;
    case "collapse":
      return <IconCollapse {...restProps} />;
      break;
    case "collection":
      return <IconCollection {...restProps} />;
      break;
    case "zoom-out":
      return <IconZoomOut {...restProps} />;
      break;
    case "zoom-in":
      return <IconZoomIn {...restProps} />;
      break;
    case "zoom-out-arrow":
      return <IconZoomOutArrow {...restProps} />;
      break;
    case "zoom-in-arrow":
      return <IconZoomInArrow {...restProps} />;
      break;
    case "loop":
      return <IconLoop {...restProps} />;
      break;
    case "download":
      return <IconDownload {...restProps} />;
      break;
    case "out":
      return <IconOut {...restProps} />;
      break;
    case "reload":
      return <IconReload {...restProps} />;
      break;
    case "undo":
      return <IconUndo {...restProps} />;
      break;
    case "sort":
      return <IconSort {...restProps} />;
      break;
    case "back":
      return <IconBack {...restProps} />;
      break;
    case "ahead":
      return <IconAhead {...restProps} />;
      break;
    case "drag":
      return <IconDrag {...restProps} />;
      break;
    case "refresh":
      return <IconRefresh {...restProps} />;
      break;
    case "check-stroke":
      return <IconCheckStroke {...restProps} />;
      break;
    case "check-fill":
      return <IconCheckFill {...restProps} />;
      break;
    case "check":
      return <IconCheck {...restProps} />;
      break;

    case "error-stroke":
      return <IconErrorStroke {...restProps} />;
      break;
    case "error-fill":
      return <IconErrorFill {...restProps} />;
      break;
    case "error":
      return <IconError {...restProps} />;
      break;

    case "info-stroke":
      return <IconInfoStroke {...restProps} />;
      break;
    case "info-fill":
      return <IconInfoFill {...restProps} />;
      break;
    case "info":
      return <IconInfo {...restProps} />;
      break;

    case "attention-stroke":
      return <IconAttentionStroke {...restProps} />;
      break;
    case "attention-fill":
      return <IconAttentionFill {...restProps} />;
      break;
    case "attention":
      return <IconAttention {...restProps} />;
      break;

    case "question-stroke":
      return <IconQuestionStroke {...restProps} />;
      break;
    case "question-fill":
      return <IconQuestionFill {...restProps} />;
      break;
    case "question":
      return <IconQuestion {...restProps} />;
      break;

    case "more":
      return <IconMore {...restProps} />;
      break;
    case "more-line":
      return <IconMoreLine {...restProps} />;
      break;
    case "file":
      return <IconFile {...restProps} />;
      break;
    case "add":
      return <IconAdd {...restProps} />;
      break;
    case "dec":
      return <IconDec {...restProps} />;
      break;
    case "clear":
      return <IconClear {...restProps} />;
      break;
    case "upload":
      return <IconUpload {...restProps} />;
      break;
    case "application":
      return <IconApplication {...restProps} />;
      break;
    case "close":
      return <IconClose {...restProps} />;
      break;
    case "close-circle":
      return <IconCloseCircle {...restProps} />;
      break;
    case "color-picker":
      return <IconColorPicker {...restProps} />;
      break;
    case "copy":
      return <IconCopy {...restProps} />;
      break;
    case "home":
      return <IconHome {...restProps} />;
      break;
    case "search":
      return <IconSearch {...restProps} />;
    case "light":
      return <IconLight {...restProps} />;
      break;
    case "dark":
      return <IconDark {...restProps} />;
      break;
    case "setting":
      return <IconSetting {...restProps} />;
      break;
    case "video-play":
      return <IconVideoPlay {...restProps} />;
      break;
    case "video-pause":
      return <IconVideoPause {...restProps} />;
      break;
    case "volume":
      return <IconVolume {...restProps} />;
      break;
    case "volume-muted":
      return <IconVolumeMuted {...restProps} />;
      break;
    case "video-small-screen":
      return <IconVideoSmallScreen {...restProps} />;
      break;
    case "video-fulWidth":
      return <IconVideoFullWidth {...restProps} />;
      break;
    case "video-contain-width":
      return <IconVideoFullWidth {...restProps} />;
      break;
    case "avatar":
      return <IconAvatar {...restProps} />;
      break;
    case "delete":
      return <IconDelete {...restProps} />;
      break;
    case "tag":
      return <IconTag {...restProps} />;
      break;
    case 'single-number': return <IconSingleNumber {...restProps} />; break;
    default:
      break;
  }
};

export default Icon;
