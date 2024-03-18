import React, { CSSProperties } from "react";
import styled from "styled-components";

export type RateProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Rate: React.FC<RateProps> = ({ children, style, className }) => {
  return <StyledRate className={className} style={style}>{children}</StyledRate>;
};

const StyledRate = styled.a<{

}>`
`;

export default Rate;
