import React from "react";
import styled from "styled-components";

type StatisticProps = {
  value?: string;
  /** 前缀 */
  prefix?: React.ReactNode;
  /** 后缀 */
  suffix?: React.ReactNode;
  /** 单位 */
  unit?: string;
  /** 趋势 */
  trendIcon?: 'up' | 'down' | 'default';
};
const Statistic: React.FC<StatisticProps> = ({
  value,
  prefix,
  suffix,
  unit,
  trendIcon
}) => {
  return <StyledLandStatistic className="land-statistic">
    {prefix && <div className="land-statistic-prefix">{prefix}</div>}
    <div className="land-statistic-value">{value}{unit && <div className="land-statistic-unit">{unit}</div>}</div>
    {trendIcon && <div className="land-statistic-trend-icon">{trendIcon}</div>}
    {suffix && <div className="land-statistic-suffix">{suffix}</div>}
  </StyledLandStatistic>;
};

const StyledLandStatistic = styled.div`
  display: flex;
  .land-statistic-value{
    font-size: 32px;
    font-weight: 700;
    color: var(--color-text-2);
    white-space: nowrap;
    vertical-align: baseline;
  }
  .land-statistic-unit{
    margin-left: 2px;
    font-size: 12px;
    color: var(--color-text-2);
  }
`;
export default Statistic;
