import React, { CSSProperties } from "react";
import styled from "styled-components";

export type SelectTreeProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const SelectTree: React.FC<SelectTreeProps> = ({ children, style, className }) => {
  return <StyledSelectTree className={className} style={style}>{children}</StyledSelectTree>;
};

const StyledSelectTree = styled.a<{

}>`
`;

export default SelectTree;
