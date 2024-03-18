import React, { CSSProperties } from "react";
import styled from "styled-components";

export type SelectProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Select: React.FC<SelectProps> = ({ children, style, className }) => {
  return <StyledSelect className={className} style={style}>{children}</StyledSelect>;
};

const StyledSelect = styled.a<{

}>`
`;

export default Select;
