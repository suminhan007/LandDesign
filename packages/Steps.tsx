import React, { CSSProperties } from "react";
import styled from "styled-components";

export type StepsProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Steps: React.FC<StepsProps> = ({ children, style, className }) => {
  return <StyledSteps className={className} style={style}>{children}</StyledSteps>;
};

const StyledSteps = styled.a<{

}>`
`;

export default Steps;
