import React, { CSSProperties } from "react";
import styled from "styled-components";

export type InputProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Input: React.FC<InputProps> = ({ children, style, className }) => {
  return <StyledInput className={className} style={style}>{children}</StyledInput>;
};

const StyledInput = styled.a<{

}>`
`;

export default Input;
