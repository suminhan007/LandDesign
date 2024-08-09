import React, { CSSProperties, Fragment } from "react";
import styled from "styled-components";
import Divider from "./Divider";
import Icon from './Icon';

export type StepsItemType = {
  /** 唯一标识 */
  key: number | string;
  /** 标题 */
  title?: string;
  /** 描述文字 */
  desc?: string;
};

export type StepsProps = {
  /** 数据 */
  data?: StepsItemType[];
  /** 当前进度 */
  current?: number | string;
  /** 已完成步骤 */
  finished?: (number | string)[];
  onClick?: (item: StepsItemType) => void;
  /** 是否显示分割线 */
  useDivider?: boolean;
  /** 分割线宽度 */
  dividerWidth?: string;
  style?: CSSProperties;
  className?: string;
};

const Steps: React.FC<StepsProps> = ({
  data = [],
  current = data[0].key,
  finished = [],
  onClick,
  useDivider = true,
  dividerWidth = '100%',
  style,
  className,
}) => {
  return <StyledSteps className={`land-steps-wrap ${className}`} style={style}>
    {data?.map((item, index) => <Fragment key={item.key}>
      {useDivider && index !== 0 && <Divider lang={dividerWidth} style={{ marginTop: '12px' }} />}
      <div className={`land-steps-item ${current === item.key ? 'active' : ''} ${finished.includes(item.key) ? 'finished' : ''}`} onClick={() => onClick?.(item)}>
        <div className="land-steps-num">{(current === item.key || !finished.includes(item.key)) ? index + 1 : <Icon name="check-stroke" size={32} strokeWidth={2} stroke="var(--color-primary-6)" />}</div>
        <div className="land-steps-title">{item.title}<div className="land-steps-desc">{item.desc}</div></div>
      </div>
    </Fragment>)}
  </StyledSteps>;
};

const StyledSteps = styled.div`
    display: flex;
    gap: var(--gap-16);
    justify-content: space-between;
    width: 100%;
  .land-steps-item{
    flex-shrink: 0;
    display: flex;
    gap: var(--gap-4);
    cursor: pointer;
    &.active{
      .land-steps-num{
        background-color: var(--color-primary-6);
        border-color: var(--color-primary-6);
        color: var(--color-text-light);
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
    &.finished:not(.active){
      .land-steps-num{
        border: none;
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
  }
  .land-steps-num{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: var(--font-content-small);
    color: var(--color-text-5);
    border: 1px solid var(--color-text-5);
    border-radius: 50%;
    transform: all var(--transition-15) linear;
  }
  .land-steps-title{
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);
    font-size: var(--font-title-small);
    color: var(--color-text-4);
  }
  .land-steps-desc{
    font-size: var(--font-content-small);
    color: var(--color-text-4);
  }
`;

export default Steps;
