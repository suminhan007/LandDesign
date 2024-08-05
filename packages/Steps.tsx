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
      {useDivider && index !== 0 && <Divider lang={dividerWidth} />}
      <div className={`land-steps-item ${current === item.key ? 'active' : ''} ${finished.includes(item.key) ? 'finished' : ''}`} onClick={() => onClick?.(item)}>
        <div className="land-steps-num">{finished.includes(item.key) ? <Icon name="check" size={10} strokeWidth={0} fill="var(--color-bg-white)" /> : index + 1}</div>
        <div className="land-steps-title">{item.title}<div className="land-steps-desc">{item.desc}</div></div>
      </div>
    </Fragment>)}
  </StyledSteps>;
};

const StyledSteps = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-16);
    justify-content: space-between;
    width: 100%;
  .land-steps-item{
    flex-shrink: 0;
    display: flex;
    gap: var(--gap-4);
    cursor: pointer;
    &.active,
    &.finished{
      .land-steps-num{
        background-color: var(--color-primary-6);
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
      color: var(--color-text-light);
      border-radius: 50%;
      background-color: var(--color-bg-4);
      transform: all var(--transition-15) linear;
    }
  .land-steps-title{
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);
    font-size: var(--font-title-small);
    color: var(--color-text-2);
  }
  .land-steps-desc{
    font-size: var(--font-content-small);
    color: var(--color-text-4);
  }
`;

export default Steps;
