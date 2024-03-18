import React, { CSSProperties } from "react";
import styled from "styled-components";

export type PaginationProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({ children, style, className }) => {
  return <StyledPagination className={className} style={style}>{children}</StyledPagination>;
};

const StyledPagination = styled.a<{

}>`
`;

export default Pagination;
