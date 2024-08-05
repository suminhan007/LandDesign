//@ts-nocheck
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type AnchorItemType = {
  /* 唯一标识 */
  key?: number | string;
  /* 锚点链接 */
  href?: string;
  /* 打开链接点方式 */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /* 锚点文字内容 */
  title?: string;
  style?: CSSProperties;
  className?: string;
}

export type AnchorProps = {
  data?: AnchorItemType[];
  /* 基于固定的节点 */
  target?: boolean;
  /** 尺寸 */
  size?: number;
  style?: CSSProperties;
  className?: string;
};

const LandAnchor: React.FC<AnchorProps> = ({
  data,
  target = document.body,
  size,
  style,
  className,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  return <StyledAnchor ref={anchorRef} className={`land-anchor-wrap ${className}`} style={style}>
    <ol className="land-anchor-list">
      {data?.map(item => <li key={item.title} >
        <a href={item.href} className={`land-anchor-link ${active ? 'active' : ''}`}>{item.title}</a>
      </li>)}
    </ol>
  </StyledAnchor >;
};

const StyledAnchor = styled.nav<{

}>`
  .land-anchor-list{
    display: flex;
    flex-direction: column;
    width: fit-content;
    list-style: none;
  }
  .land-anchor-link{
    display: inline-block;
    padding: var(--padding-medium);
    width: 100%;
    color: var(--color-text-2);
    border-left: 1px solid var(--color-border-2);
    transition: all var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &.active {
      color: var(--color-primary-6);
      border-color: var(--color-primary-6);
    }
  }
`;

export default LandAnchor;
