import Divider from "packages/Divider";
import React from "react";
import styled from "styled-components";
type TimelineItemProps = {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  desc?: string | React.ReactNode;
  direction?: "row" | "column";
};
const Item: React.FC<TimelineItemProps> = ({ title, subTitle, desc }) => {
  return (
    <StyledLandTimelineItem className="land-timeline-item">
      <div className="land-timeline-indicator-wrapper">
        <div className="land-timeline-indicator"></div>
        <Divider direction="column" />
      </div>
      <div className="land-timeline-content">
        {title && <div className="land-timeline-title">{title}</div>}
        {subTitle && <div className="land-timeline-subTitle">{subTitle}</div>}
        {desc && <div className="land-timeline-desc">{desc}</div>}
      </div>
    </StyledLandTimelineItem>
  );
};

const StyledLandTimelineItem = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 4px;
  .land-timeline-indicator-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    height: 100%;
  }
  .land-timeline-indicator {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: var(--color-primary-6);
  }
  .land-timeline-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 24px;
    .land-timeline-title {
      font-size: 16px;
      color: var(--color-text-2);
    }
    .land-timeline-subTitle {
      font-size: 12px;
      color: var(--color-text-5);
    }
    .land-timeline-desc {
      font-size: 14px;
      color: var(--color-text-4);
    }
  }
`;
export default Item;
