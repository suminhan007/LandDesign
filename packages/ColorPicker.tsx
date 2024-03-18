import React, { CSSProperties } from "react";
import styled from "styled-components";

export type ColorPickerProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ children, style, className }) => {
  return <StyledColorPicker className={className} style={style}>{children}</StyledColorPicker>;
};

const StyledColorPicker = styled.a<{

}>`
`;

export default ColorPicker;
