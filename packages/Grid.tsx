import React, { CSSProperties } from "react";
import styled from "styled-components";
import Pop from "./Pop";

export type GridProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Grid: React.FC<GridProps> = ({ children, style, className = "" }) => {
  return <StyledGrid></StyledGrid>;
};

const StyledGrid = styled.a<{
  color?: string;
}>``;

export default Grid;
