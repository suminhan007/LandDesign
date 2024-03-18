import React, { CSSProperties } from "react";
import styled from "styled-components";

export type FlexProps = {
  /* 是否为竖直方向 */
  column?: boolean;
  /* 是否换行 */
  wrap?: boolean;
  /* 元素在主轴方向上的dui qi */
  style?: CSSProperties;
  className?: string;
};

const Flex: React.FC<FlexProps> = ({ style, className = "" }) => {
  return <StyledFlex className={className} style={style}></StyledFlex>;
};

const StyledFlex = styled.div<{
  direction?: string;
  gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: ${(props) => props.gap};
`;
export default Flex;