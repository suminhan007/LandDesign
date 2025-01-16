import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Pop from "./Pop";

export type BreadCrumbItemType = {
  key: string;
  label: React.ReactNode;
  tip?: string;
  maxWidth?: number;
};

export type BreadCrumbProps = {
  data?: BreadCrumbItemType[];
  current?:string;
  onChange?: (item: BreadCrumbItemType) => void;
  style?: CSSProperties;
  className?: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  data = [],
                                                 current,
  onChange,
  style,
  className = ''
}) => {
  const breadCrumbLabelRef = useRef<HTMLSpanElement>(null);
  const [ellipsis, setEllipsis] = useState<boolean>(false);
  useEffect(() => {
    if (!breadCrumbLabelRef.current) return;
    if (breadCrumbLabelRef.current.scrollWidth >= breadCrumbLabelRef.current.offsetWidth) {
      setEllipsis(true);
    } else {
      setEllipsis(false);
    }
  }, []);
  return <StyledBreadCrumb className={`land-breadCrumb-wrap overflow-auto ${className}`} style={style}>
    {data.reverse()?.map(item => <div
      key={item.key}
      className={`land-breadCrumb-item relative hover-pop ${current === item.key ? 'active' : ''}`}
      onClick={() => onChange?.(item)}
    >
      <span ref={breadCrumbLabelRef} className={`land-breadcrumb-label ${item.maxWidth ? 'ellipsis' : ''}`} style={{ maxWidth: `${item.maxWidth}px` }}>{item.label}</span>
      <Icon name="arrow" className="-rotate-90" size={16} strokeWidth={4} />
      {ellipsis && <Pop content={item.label} />}
    </div>)}
  </StyledBreadCrumb>;
};

const StyledBreadCrumb = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .land-breadCrumb-item{
    display: flex;
    align-items: center;
    &.active{
      .land-breadcrumb-label{
        color: var(--color-text-2);
      }
    }
    .land-breadcrumb-label{
      font-size: var(--font-content-medium);
      color: var(--color-text-4);
      white-space: nowrap;
      cursor: pointer;
      transition: all var(--transition-15) linear;
      &:hover{
        color: var(--color-text-2);
      }
    }
    svg{
      margin: 0 4px;
      color: var(--color-border-3);
    }
  }
`;

export default BreadCrumb;
