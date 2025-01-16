import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Pop from "./Pop";

export type EllipsisProps = {
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
    const ellipsis = ellipsisRef.current;
    if (!ellipsis) return;
    const checkWidth = () => {
      if (line === 1) {
        setEllipsis(ellipsis.offsetWidth < ellipsis.scrollWidth);
      }
      if (line > 1) {
        setEllipsis(ellipsis.offsetHeight < ellipsis.scrollHeight);
      }
    };
    const observer = new MutationObserver(checkWidth);
    observer.observe(document, { childList: true, subtree: true });

    document.body.addEventListener("resize", checkWidth);

    return () => {
      observer.disconnect();
      document.body.removeEventListener("resize", checkWidth);
    };
  }, [line, text]);
  return <StyledLandEllipsis className='hover-pop' line={line}>
    <div ref={ellipsisRef} className="land-ellipsis-content">{text}</div>
    {ellipsis && <Pop placement="bottom" hideArrow content='这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字' style={{ maxWidth: '100%' }} />}
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
