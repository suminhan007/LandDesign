import React, { CSSProperties } from "react";
import styled from "styled-components";
import Icon from "./Icon";

export type PaginationProps = {
  /** 当前页 */
  current?: number;
  /** 省略方式 */
  ellipsisMode?: 'both-sides' | 'center';
  /** 总页数 */
  total?: number;
  /** 每次加载的页数 */
  pageSize?: 1 | 5 | 10 | 15 | 20;
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  ellipsisMode = 'center',
  pageSize = 1,
  total = 1,
  children,
  style,
  className = '',
}) => {
  return <StyledPagination className={className} style={style}>
    <div className="land-pagination-arrow-prev"><Icon name="arrow" className="rotate-90" strokeWidth={4} /></div>
    {Array.from({ length: total }).map((_item, index) => <div className="land-pagination-num-item">
      {index + 1}
    </div>
    )}
    <div className="land-pagination-arrow-next"><Icon name="arrow" className="-rotate-90" strokeWidth={4} /></div>
  </StyledPagination>;
};

const StyledPagination = styled.a<{

}>`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  .land-pagination-num-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: var(--font-content-medium);
    color: var(--color-text-2);
    border-radius: var(--radius-6);
    border: 1px solid var(--color-border-2);
    cursor: pointer;
    transition: background-color var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &:active{
      background-color: var(--color-bg-2);
    }
  }
  .land-pagination-arrow-prev,
  .land-pagination-arrow-next{
    flex-shrink: 0;
    color: var(--color-border-3);
    cursor: pointer;
    transition: color var(--transition-15) linear;
    &:hover{
      color: var(--color-text-2);
    }
    &:active{
      color: var(--color-text-1);
    }
  }
`;

export default Pagination;
