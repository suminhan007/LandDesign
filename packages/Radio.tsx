import React, { CSSProperties } from "react";
import styled from "styled-components";

export type RadioProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Radio: React.FC<RadioProps> = ({ children, style, className }) => {
  return <StyledRadio className={className} style={style}>{children}</StyledRadio>;
};

const StyledRadio = styled.a<{

}>`
`;

export default Radio;
