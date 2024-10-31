import React from "react";
import styled from "styled-components";
import Divider from "./Divider";

type TimelineProps = {
  data?: {
    title?: string | React.ReactNode,
    subTitle?: string | React.ReactNode,
    desc?: string | React.ReactNode,
    /** 自定义图标 */
    icon?: React.ReactNode,
  }[];
  direction?: "row" | "column";
  /** 全局自定义图标 */
  icon?: React.ReactNode,
};

const Timeline: React.FC<TimelineProps> = ({ data, direction = "column", icon }) => {
  return (
    <StyledLandTimeline className={`${direction === 'row' ? 'row' : ''}`}>
      {
        data?.map((item, index) => <StyledLandTimelineItem key={index} className={`land-timeline-item ${direction === 'row' ? 'row' : ''}`}>
          <div className="land-timeline-indicator-wrapper">
            {item.icon || icon || <div className="land-timeline-indicator"></div>}
            {index !== data?.length - 1 && <Divider direction={direction} />}
          </div>
          <div className="land-timeline-content">
            {item.title && <div className="land-timeline-title">{item.title}</div>}
            {item.subTitle && <div className="land-timeline-subTitle">{item.subTitle}</div>}
            {item.desc && <div className="land-timeline-desc">{item.desc}</div>}
          </div>
        </StyledLandTimelineItem>)
      }
    </StyledLandTimeline>
  );
};

const StyledLandTimeline = styled.div`
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
    align-items: flex-start;
  }
`;

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
  svg{
    flex-shrink: 0;
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
  &.row{
    flex-direction: column;
    padding-top: 0px;
    padding-left: 4px;
    .land-timeline-indicator-wrapper{
      flex-direction: row;
    }
    .land-timeline-content{
      padding-bottom: 0px;
      padding-right: 24px;
    }
  }
`;

export default Timeline;
