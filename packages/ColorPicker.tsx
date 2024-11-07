import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";

export type ColorPickerProps = {
  /* 外部回传的 value 值 */
  value?: string;
  /** 尺寸 */
  size?: string | number;
  /** 是否有border */
  border?: boolean;
  /** 是否可选颜色 */
  useSelect?: boolean;
  onChange?: (color: string, e: any) => void;
  onClick?: (color: string) => void;
  onCardClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
  value = "var(--color-bg-1)",
  size,
  border = false,
  useSelect = true,
  onChange,
  onClick,
  style,
  className = "",
}) => {
  const [color, setColor] = useState<string>(value);
  useEffect(() => setColor(value), [value]);
  return (
    <StyledColorPickerWrap
      className={className}
      style={
        size
          ? {
              width: typeof size === "number" ? `${size}px` : size,
              height: typeof size === "number" ? `${size}px` : size,
              background: color,
              ...style,
            }
          : {
              background: color,
              ...style,
            }
      }
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(color);
      }}
      border={border}
    >
      {useSelect && (
        <input
          type="color"
          onChange={(e: any) => {
            e.stopPropagation();
            onChange?.(e.target.value, e);
          }}
        />
      )}
    </StyledColorPickerWrap>
  );
};

const StyledColorPickerWrap = styled.label<{
  border?: boolean;
}>`
  border: ${(props) => (props.border ? "4px solid var(--color-border-1)" : "")};
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`;

export default ColorPicker;
