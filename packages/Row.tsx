import React, { CSSProperties } from "react";
import styled from "styled-components";

export type RowProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Row: React.FC<RowProps> = ({ children, style, className }) => {
  return <StyledRow className={className} style={style}>{children}</StyledRow>;
};

const StyledRow = styled.a<{

}>`
`;

export default Row;
