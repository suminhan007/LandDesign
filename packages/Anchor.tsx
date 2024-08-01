import React, { CSSProperties } from "react";
import styled from "styled-components";

export type AnchorItemType = {
  /* 唯一标识 */
  key?: number;
  /* 锚点链接 */
  href?: string;
  /* 打开链接点方式 */
  target?: string;
  /* 锚点文字内容 */
  text?: string;
  style?: CSSProperties;
  className?: string;
}

export type AnchorProps = {
  /* 是否固定 */
  fixed?: boolean;
  /* 锚点数据 */
  anchorData?: AnchorItemType[];
  style?: CSSProperties;
  className?: string;
};

const LandAnchor: React.FC<AnchorProps> = ({ style, className }) => {
  return <StyledAnchor className={className} style={style}>
    <ol></ol>
  </StyledAnchor>;
};

const StyledAnchor = styled.nav<{

}>`

`;

export default LandAnchor;
