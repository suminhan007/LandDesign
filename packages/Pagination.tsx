import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Input from "./Input";

export type PaginationProps = {
  /** 当前页 */
  current?: number;
  /** 总页数 */
  total?: number;
  /** 每次加载的页数 */
  pageSize?: 1 | 5 | 10 | 15 | 20;
  /** 是否显示总页数 */
  showTotal?: boolean;
  /** 是否显示输入框 */
  showInput?: boolean;
  onChange?: (current: number) => void;
  style?: CSSProperties;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  pageSize = 1,
  total = 1,
  showTotal = false,
  showInput = false,
  onChange,
  style,
  className = '',
}) => {
  const [newCurrent, setNewCurrent] = useState<number>(current);
  useEffect(() => {
    setNewCurrent(current);
  }, [current]);

  const [curStart, setCurStart] = useState<number>(2);
  const pageData = useMemo(() => {
    return Array.from({ length: total })
      .map((_itm, idx) => ({ id: idx + 1 }))
      .filter(itm1 => itm1.id > 1 && itm1.id < total)
      .filter((itm2) => itm2.id >= curStart && itm2.id < (curStart + pageSize));
  }, [total, pageSize, curStart]);

  const getIsOut = (id: number) => pageData.filter(itm => itm.id === id).length === 0 && newCurrent !== 1 && newCurrent !== total;
  const isStartPreOut = curStart <= pageSize * 2;
  const isStartNextOut = total - curStart < pageSize * 2;

  return <StyledPagination className={className} style={style}>
    {showTotal && <div className="land-pagination-total">共{total}页</div>}
    <div onClick={() => {
      if (newCurrent > 1) {
        setNewCurrent(newCurrent - 1);
        getIsOut?.(newCurrent - 1) && (isStartPreOut ? setCurStart(2) : setCurStart(newCurrent - 1));
      }
    }}
      className={`land-pagination-arrow-prev ${newCurrent === 1 ? 'disabled' : ''}`}>
      <Icon name="arrow" className="rotate-90" strokeWidth={4} />
    </div>
    <div className="land-pagination-page">
      {/* 第一页 */}
      <div
        className={`land-pagination-num-item ${newCurrent === (1) ? 'active' : ''}`}
        onClick={() => { setNewCurrent(1); onChange?.(1) }}
      >1</div>
      {pageData[0]?.id > 2 && <div onClick={() => !isStartPreOut ? setCurStart(curStart - pageSize) : setCurStart(2)} className="land-pagination-arrow-double-prev"><Icon name="more" size={16} /><Icon name="arrow-double" className="arrow rotate-90" size={24} /></div>}
      {/* 中间页 */}
      {pageData?.map(item => <div
        key={item.id}
        className={`land-pagination-num-item ${newCurrent === (item.id) ? 'active' : ''}`}
        onClick={() => { setNewCurrent(item.id); onChange?.(item.id) }}
      >
        {item.id}
      </div>
      )}
      {pageData[pageData?.length - 1]?.id < total - 1 && <div onClick={() => !isStartNextOut ? setCurStart(curStart + pageSize) : setCurStart(total - pageSize)} className="land-pagination-arrow-double-next"><Icon name="more" size={16} /><Icon name="arrow-double" className="arrow -rotate-90" size={24} /></div>}
      {/* 最后一页 */}
      <div
        className={`land-pagination-num-item ${newCurrent === (total) ? 'active' : ''}`}
        onClick={() => { setNewCurrent(total); onChange?.(total) }}
      >{total}</div>
    </div>
    <div onClick={() => {
      if (newCurrent < total) {
        setNewCurrent(newCurrent + 1);
        getIsOut?.(newCurrent + 1) && (isStartNextOut ? setCurStart(total - pageSize) : setCurStart(newCurrent + 1));
      }
    }} className={`land-pagination-arrow-next ${newCurrent === total ? 'disabled' : ''}`}><Icon name="arrow" className="-rotate-90" strokeWidth={4} /></div>
    {/* 自定义页码 */}
    {showInput && <div className="land-pagination-input">跳转至<Input onChange={val => setNewCurrent(Number(val))} style={{ height: '24px', width: '24px' }} /> / {total} 页</div>}
  </StyledPagination>;
};

const StyledPagination = styled.div<{

}>`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  font-size: var(--font-content-medium);
  .land-pagination-total {
    flex-shrink: 0;
    color: var(--color-text-4);
  }
  .land-pagination-page{
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: var(--gap-8);
    height: fit-content;
  }
  .land-pagination-num-item,
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: var(--font-content-medium);
    color: var(--color-text-2);
    border-radius: var(--radius-6);
    border: 1px solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &:active{
      background-color: var(--color-bg-2);
    }
    &.active{
      background-color: var(--color-primary-6);
      color: var(--color-text-light);
      border-color: var(--color-primary-6);
    }
  }
  .land-pagination-arrow-prev,
  .land-pagination-arrow-next{
    flex-shrink: 0;
    color: var(--color-border-3);
    cursor: pointer;
    transition: color var(--transition-15) linear;
    &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &:active:not(.disabled){
      color: var(--color-text-1);
    }
    &.disabled{
      cursor: not-allowed;
    }
  }
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    position: relative;
    transition: opacity var(--transition-2s) linear;
    svg.arrow{
      position: absolute;
      top: 3px;
      left: 3px;
      background: inherit;
      opacity: 0;
      transition: opacity var(--transition-2s) linear;
    }
    &:hover{
      svg.arrow{
          opacity: 1;
      }
    }
  }
  .land-pagination-input{
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    color: var(--color-text-4);
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

export default Pagination;
