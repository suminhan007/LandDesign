import React, { CSSProperties } from "react";
import styled from "styled-components";

export type RateProps = {
  step?: number;
  desc?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

const Rate: React.FC<RateProps> = ({
  step = 5,
  desc,
  style,
  className = "",
}) => {
  return (
    <StyledRateWrap className={`land-rate-wrap ${className}`} style={style}>
      {Array.from({ length: step }).map((_i, index) => (
        <div key={index} className="land-rate-character half">
          <div
            className="land-rate-character-left"
            role="radio"
            aria-checked="true"
            aria-setsize={`${step}`}
            aria-posinset="0.5"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
              className="land-icon land-icon-star-fill"
            >
              <path
                fill="currentColor"
                stroke="none"
                d="M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"
              ></path>
            </svg>
          </div>
          <div
            className="land-rate-character-right"
            role="radio"
            aria-checked="true"
            aria-setsize={`${step}`}
            aria-posinset="1"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
              className="land-icon land-icon-star-fill"
            >
              <path
                fill="currentColor"
                stroke="none"
                d="M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </StyledRateWrap>
  );
};

const StyledRateWrap = styled.div`
  &.land-rate-wrap {
    display: flex;
    gap: var(--gap-8);
  }
  .land-rate-character {
    width: 24px;
    height: 24px;
    .land-icon-star-fill path {
      fill: var(--color-bg-3);
    }
  }
`;

export default Rate;
