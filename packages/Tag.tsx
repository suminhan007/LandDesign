import React, { CSSProperties } from "react";
import Icon from "./Icon";
import styled from "styled-components";

type TagProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  canDelete?: boolean;
  color?: string;
  border?: string;
  background?: string;
  style?: CSSProperties;
  className?: string;
};
const Tag: React.FC<TagProps> = ({
  children,
  icon,
  canDelete,
  color = "var(--color-text-2)",
  border,
  background = "var(--color-bg-3)",
  style,
  className,
}) => {
  return (
    <StyledLandTag
      className={className}
      style={{ border, background, color, ...style }}
    >
      {icon}
      {children}
      {canDelete && <Icon name="close" />}
    </StyledLandTag>
  );
};

const StyledLandTag = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 14px;
  svg {
    flex-shrink: 0;
  }
`;
export default Tag;
