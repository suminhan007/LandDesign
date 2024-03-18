import React, { CSSProperties } from "react";
import styled from "styled-components";

export type AnchorProps = {
  /* 是否固定 */
  fixed?: boolean;
  /* 锚点数据 */
  anchorData?: any[];
  style?: CSSProperties;
  className?: string;
};

const Anchor: React.FC<AnchorProps> = ({ style, className }) => {
  return <StyledAnchor className={className} style={style}></StyledAnchor>;
};

const StyledAnchor = styled.div<{

}>`

`;

export default Anchor;
