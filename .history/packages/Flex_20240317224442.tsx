import React, { CSSProperties } from "react";
import styled from "styled-components";

export type FlexProps = {
  
  style?: CSSProperties;
  className?: string;
};

const Flex: React.FC<FlexProps> = ({ 
  style,
  className = "",
}) => {
  return (
    <StyledFlex
      className={className}
      style={style}
      direction={direction}
      gap={content ? "8px" : ""}
    >
      <div
        style={{
          flex: align === "left" ? "10%" : align === "right" ? "90%" : 1,
          height: "0px",
          borderBottom:
            direction === "row" ? `${size}px ${type} ${color}` : "none",
          borderLeft:
            direction === "column" ? `${size}px ${type} ${color}` : "none",
        }}
      ></div>
      {content && (
        <>
          <div
            style={{
              fontSize: "12px",
              color: "#999",
              writingMode: direction === "column" ? "vertical-rl" : "unset",
              textOrientation: direction === "column" ? "upright" : "unset",
            }}
          >
            {content}
          </div>
          <div
            style={{
              flex: align === "left" ? "90%" : align === "right" ? "10%" : 1,
              height: "0px",
              borderBottom:
                direction === "row" ? `${size}px ${type} ${color}` : "none",
              borderLeft:
                direction === "column" ? `${size}px ${type} ${color}` : "none",
            }}
          ></div>
        </>
      )}
    </StyledFlex>
  );
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
export default Divider;
