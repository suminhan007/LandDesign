//@ts-nocheck
import React, {CSSProperties, useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";

export type AnchorItemType = {
  /* 唯一标识 */
  key?:string;
  /* 锚点链接 */
  href?: string;
  /* 锚点文字内容 */
  title?: string;
}

export type AnchorProps = {
  data?: AnchorItemType[];
  style?: CSSProperties;
  className?: string;
};

const Anchor: React.FC<AnchorProps> = ({
  data,
  style,
  className,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [activeID, setActiveID] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ids = useMemo(() => data?.map(i => i.key),[data])
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting && entry.intersectionRatio >= 0.5);
      if (visibleEntries.length > 0) {
        const firstVisibleEntry = visibleEntries[0];
        setActiveID(firstVisibleEntry.target.id);
      } else {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (!entry.isIntersecting && activeID === id) {
            const currentIndex = ids.indexOf(id);
            const previousID = ids[currentIndex - 1] || null;
            setActiveID(previousID);
          }
        });
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0,1]
    });

    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, activeID]);
  return <StyledAnchor ref={anchorRef} className={`land-anchor-wrap ${className}`} style={style}>
    <ol className="land-anchor-list">
      {data?.map((item,index) => <li key={item.title} >
        <a href={item.href} className={`land-anchor-link ${activeID===item.key ? 'active' : ''}`} onClick={() => {
          setActiveID(item.key);
          setActiveIndex(index);
        }}>{item.title}</a>
      </li>)}
      <div className={'land-anchor-active-indicator'} style={{transform: `translateY(${activeIndex*38})px`}}></div>
    </ol>
  </StyledAnchor >;
};

const StyledAnchor = styled.nav<{

}>`
  .land-anchor-list{
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
    list-style: none;
  }
  .land-anchor-link{
    display: inline-block;
    padding: var(--padding-medium);
    width: 100%;
    font-size: 14px;
    line-height: 22px;
    color: var(--color-text-2);
    border-left: 1px solid var(--color-border-2);
    transition: all var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &.active {
      color: var(--color-primary-6);
    }
  }
  .land-anchor-active-indicator{
    position: absolute;
    width: 1px;
    height: 38px;
    left: 0;
    top: 0;
    background-color: var(--color-primary-6);
    transition: transform var(--transition-15) linear;
  }
`;

export default Anchor;
