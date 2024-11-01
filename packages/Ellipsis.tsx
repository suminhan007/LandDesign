import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Pop from "./Pop";

type EllipsisProps = {
  line?: number;
  text?: React.ReactNode;
};
const Ellipsis: React.FC<EllipsisProps> = ({
  line = 1,
  text,
}) => {
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const [ellipsis, setEllipsis] = useState<boolean>(false);
  useEffect(() => {
    const checkWidth = () => {
      if (line === 1) {
        if (ellipsisRef.current) {
          setEllipsis(ellipsisRef.current.offsetWidth < ellipsisRef.current.scrollWidth);
        }
      }
      if (line > 1) {
        if (ellipsisRef.current) {
          setEllipsis(ellipsisRef.current.offsetHeight < ellipsisRef.current.scrollHeight);
        }
      }
    };
    const observer = new MutationObserver(checkWidth);
    observer.observe(document, { childList: true, subtree: true });

    window.addEventListener('resize', checkWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkWidth);
    };
  }, [text]);
  return <StyledLandEllipsis className={`${ellipsis ? 'hover-pop' : ''} `} line={line}>
    <div ref={ellipsisRef} className="land-ellipsis-content">{text}</div>
    {ellipsis && <Pop content='这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字' style={{ maxWidth: '100%' }} />}
  </StyledLandEllipsis>;
};

const StyledLandEllipsis = styled.div<{
  line?: number;
}>`
  position: relative;
  width: 100%;
  .land-ellipsis-content{
    font-size: 14px;
    color: inherit;
    overflow: hidden;
    white-space: ${props => props.line > 1 ? '' : 'nowrap'};
    text-overflow: ellipsis;
    display: ${props => props.line > 1 ? '-webkit-box' : ''};
    -webkit-line-clamp: ${props => props.line};
    -webkit-box-orient: vertical;
    cursor: default ;
  }
`;

export default Ellipsis;
