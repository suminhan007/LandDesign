import React, { useEffect, useState } from "react";
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
  animation?: "increase" | "decrease" | "random";
};
const Statistic: React.FC<StatisticProps> = ({
  value,
  prefix,
  suffix,
  unit,
  trendIcon,
  animation,
}) => {
  const [displayValue, setDisplayValue] = useState<string>('');
  useEffect(() => {
    if (animation === 'random') return;
    let duration = 500;

    let startNumber: number;
    let increment: number;

    const updateNumber = () => {
        startNumber += increment;
        if ((animation === 'increase' && startNumber >= value) ||
          (animation === 'decrease' && startNumber <= value)) {
          setDisplayValue(value.toString());
          return;
        } else {
          setDisplayValue(Math.floor(startNumber).toString());
        }
      requestAnimationFrame(updateNumber);
    };

    switch (animation) {
      case 'increase':
        startNumber = 0;
        increment = value / (duration / 10);
        break;
      case 'decrease':
        startNumber = value * 2;
        increment = -value / (duration / 10);
        break;
      default:
        console.error('Invalid trend specified');
        return;
    }

    updateNumber();
  }, [animation, value]);
  const valueArray = value.toString().split('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);
  return (
    <StyledLandStatistic className="land-statistic">
      {prefix && <div className="land-statistic-prefix">{prefix}</div>}
      <div className="land-statistic-value">
        {animation === 'random' && <div className="flex items-center">
          {valueArray?.map((i, idx) => {
            return (
                <div
                    className="land-statistic-random"
                    key={`${i}${idx}`}
                    style={{
                      height: '45px',
                    }}
                >
                  <div
                      className="land-statistic-random-list"
                      style={{
                        transition: 'all 1s ease-in-out 0s',
                        transform: `translate3d(0,-${animate ? Number(i) * 45 : 0}px,0)`,
                      }}
                  >
                    {[0,1,2,3,4,5,6,7,8,9].map(i => <div key={i} >{i}</div>)}
                  </div>
                </div>
            );
          })}
        </div>}
        {animation && animation!=='random'&& displayValue}
        {!animation && value}
        {unit && <div className="land-statistic-unit">{unit}</div>}
      </div>
      {trendIcon && (
          <div className="land-statistic-trend-icon">
            {trendIcon === "up" && (
                <Icon name="increase" strokeWidth={0} fill="var(--color-green-6)"/>
            )}
            {trendIcon === "down" && (
                <Icon name="increase" style={{transform: 'rotate(180deg)'}} strokeWidth={0} fill="var(--color-red-6)"/>
            )}
            {trendIcon === "default" && (
                <Icon name="increase" strokeWidth={0} fill="var(--color-border-3)"/>
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
    gap: 2px;
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
  .land-statistic-random{
    overflow: hidden;
  }
  .land-statistic-random-list{
    display: flex;
    flex-direction: column;
  }
`;
export default Statistic;
