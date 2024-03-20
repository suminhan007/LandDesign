import React, { CSSProperties } from "react";
import styled from "styled-components";

export type AnchorType = {
  /* 唯一标识 */
  key?: number;
  /* 锚点链接 */
  href?: string;
  /* 打开链接点方式 */
  target?: string;
  /* 锚点文字内容 */
  text?: string;
  replace?: boolean;
}

export type AnchorProps = {
  /* 是否固定 */
  fixed?: boolean;
  /* 锚点数据 */
  anchorData?: AnchorType[];
  style?: CSSProperties;
  className?: string;
};

const LandAnchor: React.FC<AnchorProps> = ({ style, className }) => {
  return <StyledAnchor className={className} style={style}></StyledAnchor>;
};

const StyledAnchor = styled.div<{

}>`

`;

export default LandAnchor;
