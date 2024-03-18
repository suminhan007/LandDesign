import React, { CSSProperties } from "react";
import styled from "styled-components";

export type SliderProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Slider: React.FC<SliderProps> = ({ children, style, className }) => {
  return <StyledSlider
    className={className}
    style={style}
  >
    {children}
  </StyledSlider>;
};

const StyledSlider = styled.aside<{
}>`
`;

export default Slider;
