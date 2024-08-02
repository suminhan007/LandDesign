import React, { CSSProperties, useEffect, useRef } from "react";
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
  style?: CSSProperties;
  className?: string;
};

const LandAnchor: React.FC<AnchorProps> = ({
  data,
  target = document.body,
  style,
  className,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // target.appendChild()
  }, [target]);
  return <StyledAnchor ref={anchorRef} className={className} style={style}>
    <ol>
      {data?.map(item => <li>
        <a href={item.href} >{item.title}</a>
      </li>)}
    </ol>
  </StyledAnchor>;
};

const StyledAnchor = styled.nav<{

}>`

`;

export default LandAnchor;
