import React, { CSSProperties } from "react";
import styled from "styled-components";

export type CheckboxProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ children, style, className }) => {
  return <StyledCheckbox className={className} style={style}>{children}</StyledCheckbox>;
};

const StyledCheckbox = styled.a<{

}>`
`;

export default Checkbox;
