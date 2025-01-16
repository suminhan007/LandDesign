import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components';

export type AutoContainerProps = {
  ratio?: number;
  wrapClassName?: string;
  children?: React.ReactNode;
};
const AutoContainer: React.FC<AutoContainerProps> = ({
  ratio = 1,
  wrapClassName = '',
  children,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [wrapRatio, setWrapRatio] = useState<number>(1);
  useEffect(() => {
    if (!wrapRef.current) return;
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach(entry => {
        setWrapRatio(entry.contentRect.width / entry.contentRect.height);
      })
    }
    const observer = new ResizeObserver(callback);
    observer.observe(wrapRef.current);
  }, []);
  const isHorizontal = useMemo(() => ratio > wrapRatio, [ratio, wrapRatio]);
  return (
    <StyledAutoContainer
      ref={wrapRef}
      className={`land-auto-container ${wrapClassName}`}
    >
      <div
        style={{
          width: isHorizontal ? '100%' : 'auto',
          height: isHorizontal ? 'auto' : '100%',
          aspectRatio: `${ratio}`
        }}
      >{children}</div>
    </StyledAutoContainer>
  );
};

const StyledAutoContainer = styled.div`
  width: 100%;
  height: 100%;
`
export default AutoContainer;
