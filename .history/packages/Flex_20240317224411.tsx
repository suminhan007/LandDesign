import React, { CSSProperties } from "react";
import styled from "styled-components";

export type FlexProps = {
  
  style?: CSSProperties;
  className?: string;
};

const Flex: React.FC<FlexProps> = ({
  direction = "row",
  size = 1,
  lang = "100%",
  margin = 0,
  type = "solid",
  color = "var(--color-border-1)",
  content,
  align = "center",
  style,
  className = "",
}) => {
  return (
    <StyledFlex
      className={`land-Flex ${className}`}
      style={{
        width: direction === "row" ? `${lang}` : `${size}px`,
        height: direction === "column" ? `${lang}` : `${size}px`,
        margin: direction === "row" ? `${margin}px 0` : `0 ${margin}px`,
        ...style,
      }}
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
