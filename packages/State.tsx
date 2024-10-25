import React from "react";
import Button from "./Button";
import styled from "styled-components";
import Link from "./Link";
import Icon from "./Icon";

type StateProps = {
  type?: "empty" | "offline";
  title: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  titleLink?: string;
  subTitleLink?: string;
  button?: string;
  onTiTleLinkClick?: (e: any) => void;
  onSubTitleLinkClick?: (e: any) => void;
};
const State: React.FC<StateProps> = ({
  type = "empty",
  title,
  subTitle,
  titleLink,
  subTitleLink,
  button,
  onTiTleLinkClick,
  onSubTitleLinkClick,
}) => {
  return (
    <StyledLandState>
      {type === "empty" && (
        <Icon name="check-fill" size={48} fill="var(--color-border-2)" />
      )}
      {type === "offline" && (
        <Icon name="error-fill" size={48} fill="var(--color-border-2)" />
      )}
      <div className="land-state-title">
        {title}
        {titleLink && (
          <>
            ，<Link onClick={onTiTleLinkClick}>{titleLink}</Link>
          </>
        )}
      </div>
      {(subTitle || subTitleLink) && (
        <div className="land-state-subTitle">
          {subTitle}
          {
            <>
              ，<Link onClick={onSubTitleLinkClick}>{subTitleLink}</Link>
            </>
          }
        </div>
      )}
      {button && <Button>{button}</Button>}
    </StyledLandState>
  );
};
const StyledLandState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .land-state-title {
    font-size: 14px;
    margin-top: 8px;
    color: var(--color-text-3);
  }
  .land-state-subTitle {
    font-size: 12px;
    margin-top: 4px;
    color: var(--color-text-4);
  }
`;

export default State;
