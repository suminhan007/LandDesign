import React, { useMemo } from "react";
import Icon from "./Icon";
import styled from "styled-components";
import Link from "./Link";
import Loading from "./Loading";

type AlertProps = {
  type?: "default" | "error" | "fail" | "success" | "warn" | "loading";
  direction?: "row" | "column";
  title: React.ReactNode | string;
  link?: string;
  onLinkClick?: (e: any) => void;
};
const Alert: React.FC<AlertProps> = ({
  type = "default",
  direction = "row",
  title,
  link,
  onLinkClick,
}) => {
  const iconSize = useMemo(() => (direction === "row" ? 16 : 24), [direction]);
  return (
    <StyledLandAlert direction={direction}>
      {type === "fail" && (
        <Icon name="error-fill" size={iconSize} fill="var(--color-red-6)" />
      )}
      {type === "default" && (
        <Icon
          name="attention-fill"
          size={iconSize}
          fill="var(--color-primary-6)"
        />
      )}
      {type === "warn" && (
        <Icon
          name="attention-fill"
          size={iconSize}
          fill="var(--color-orange-6)"
        />
      )}
      {type === "error" && (
        <Icon name="attention-fill" size={iconSize} fill="var(--color-red-6)" />
      )}
      {type === "success" && (
        <Icon name="check-fill" size={iconSize} fill="var(--color-green-6)" />
      )}
      {type === "loading" && (
        <Loading size={iconSize} color="var(--color-primary-6)" />
      )}
      <div className="land-alert-title">
        {title}
        {link && (
          <>
            ，<Link onClick={onLinkClick}>{link}</Link>
          </>
        )}
      </div>
    </StyledLandAlert>
  );
};
const StyledLandAlert = styled.div<{
  direction?: "row" | "column";
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: ${(props) => (props.direction === "row" ? "4px" : "8px")};
  .land-alert-title {
    font-size: 14px;
    color: var(--color-text-3);
  }
`;

export default Alert;
