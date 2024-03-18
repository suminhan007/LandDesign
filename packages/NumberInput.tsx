import React, { CSSProperties } from "react";
import styled from "styled-components";

export type NumberInputProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const NumberInput: React.FC<NumberInputProps> = ({ children, style, className }) => {
  return <StyledNumberInput className={className} style={style}>{children}</StyledNumberInput>;
};

const StyledNumberInput = styled.a<{

}>`
`;

export default NumberInput;
