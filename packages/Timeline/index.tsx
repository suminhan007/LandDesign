import React from "react";
import Item from "./Item";
import styled from "styled-components";

type TimelineProps = {
  direction?: "row" | "column";
  children?: React.ReactNode;
};

const Timeline: React.FC<TimelineProps> & {
  Item: typeof Item;
} = ({ direction = "column", children }) => {
  return (
    <StyledLandTimeline className={`${direction}`}>
      {children}
    </StyledLandTimeline>
  );
};

const StyledLandTimeline = styled.div`
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
  }
`;

Timeline.Item = Item;
export default Timeline;
