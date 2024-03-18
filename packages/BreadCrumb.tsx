import React, { CSSProperties } from "react";
import styled from "styled-components";

export type BreadCrumbProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ children, style, className }) => {
  return <StyledBreadCrumb className={className} style={style}>{children}</StyledBreadCrumb>;
};

const StyledBreadCrumb = styled.a<{

}>`
`;

export default BreadCrumb;
