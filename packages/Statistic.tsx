import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export type StatisticProps = {
  value?: number;
  /** 前缀 */
  prefix?: React.ReactNode;
  /** 后缀 */
  suffix?: React.ReactNode;
  /** 单位 */
  unit?: string;
  /** 趋势 */
  trendIcon?: "up" | "down" | "default";
  animation?: boolean;
};
const Statistic: React.FC<StatisticProps> = ({
  value,
  prefix,
  suffix,
  unit,
  trendIcon,
  animation,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(value);
  useEffect(() => setDisplayValue(value), [value]);
  const startValue = useRef(0);
  const startTime = useRef(null);
  useEffect(() => {
    if (!animation) return;
    const duration = 2000;
    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const newValue = Math.min(
        startValue.current +
          (value - startValue.current) * (progress / duration),
        value
      );
      setDisplayValue(newValue);
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        startTime.current = null;
      }
      requestAnimationFrame(animate);
      return () => (startTime.current = null);
    };
  }, [value]);
  return (
    <StyledLandStatistic className="land-statistic">
      {prefix && <div className="land-statistic-prefix">{prefix}</div>}
      <div className="land-statistic-value">
        {displayValue}
        {unit && <div className="land-statistic-unit">{unit}</div>}
      </div>
      {trendIcon && (
        <div className="land-statistic-trend-icon">
          {trendIcon === "up" && (
            <Icon name="arrow-increase" fill="var(--color-green-6)" />
          )}
          {trendIcon === "down" && (
            <Icon name="arrow-increase" fill="var(--color-red-6)" />
          )}
          {trendIcon === "default" && (
            <Icon name="arrow-increase" fill="var(--color-red-6)" />
          )}
        </div>
      )}
      {suffix && <div className="land-statistic-suffix">{suffix}</div>}
    </StyledLandStatistic>
  );
};

const StyledLandStatistic = styled.div`
  display: flex;
  .land-statistic-value {
    display: flex;
    align-items: baseline;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-text-2);
    white-space: nowrap;
  }
  .land-statistic-unit {
    margin-left: 2px;
    font-size: 12px;
    color: var(--color-text-2);
  }
  .land-statistic-trend-icon {
    flex-shrink: 0;
    width: 24px;
  }
`;
export default Statistic;
