import React, { CSSProperties, useMemo } from "react";
import styled from "styled-components";

export type FlexProps = {
  /* 是否为竖直方向 */
  column?: boolean;
  /* 是否换行 */
  wrap?: boolean;
  /* 元素在主轴方向上的对齐方式 */
  justify?: "start" | "center" | "end";
  /* 元素在交叉轴方向山的对齐方式 */
  align?: "start" | "center" | "end";
  /* 间隙 */
  gap?: string | number;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

const Flex: React.FC<FlexProps> = ({
  column,
  wrap,
  justify = "start",
  align = "start",
  gap,
  children,
  style,
  className = "",
}) => {
  return (
    <StyledFlex className={className} style={style} gap={gap} wrap={wrap}>
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<{
  direction?: string;
  gap?: string | number;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: ${(props) => props.gap};
  flex-wrap: ${};
`;
export default Flex;
