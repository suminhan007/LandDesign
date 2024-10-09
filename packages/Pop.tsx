import React, { CSSProperties } from 'react';
import styled from 'styled-components';

enum PopType {
  BG = 'background',
  BORDER = 'border',
}

export type PopProps = {
  /** 是否直接显示 */
  show?: boolean;
  /** 样式 */
  type?: PopType;
  /** 颜色模式 */
  theme?: "light" | "dark";
  /** 气泡内容 */
  content?: React.ReactNode;
  /** 气泡位置 */
  placement?: "top" | "bottom" | "left" | "right";
  /** 是否隐藏气泡箭头 */
  hideArrow?: boolean;
  style?: CSSProperties;
  className?: string;
};

const Pop: React.FC<PopProps> = ({
  show,
  content,
  theme = "light",
  placement = "top",
  hideArrow = false,
  style,
  className = "",
}) => {
  if (!content) return;
  return (
    <StyledBtnPop
      className={`land-pop ${show ? 'show' : ''} ${theme} ${className}`}
      style={{
        top:
          placement === "bottom"
            ? "100%"
            : placement === "top"
              ? "auto"
              : "50%",
        bottom: placement === "top" ? "100%" : "",
        left:
          placement === "right"
            ? "100%"
            : placement === "left"
              ? "auto"
              : "50%",
        right: placement === "left" ? "100%" : "",
        transform: `translate(${placement === "top" || placement === "bottom"
          ? "-50%"
          : placement === "left"
            ? "-12px"
            : "12px"
          }, ${placement === "top"
            ? "-12px"
            : placement === "bottom"
              ? "12px"
              : "-50%"
          })`,
        ...style,
      }}
      hideArrow={hideArrow}
    >
      {content}
      {!hideArrow && <div
        className="land-pop-arrow"
        style={{
          left:
            placement === "left" ? "100%" : placement === "right" ? "0" : "50%",
          top:
            placement === "top"
              ? "100%"
              : placement === "bottom"
                ? "0px"
                : "50%",
          bottom: placement === "bottom" ? "100%" : "",
          transform: `translate(${placement === "left"
            ? "-50%"
            : placement === "right"
              ? "-50%"
              : "-50%"
            }, ${placement === "top"
              ? "-50%"
              : placement === "bottom"
                ? "-50%"
                : "-50%"
            }) rotate(${placement === 'top' ? '45' : placement === 'bottom' ? '-135' : placement === 'right' ? '135' : '-45'}deg)`,
        }}
      ></div>}
    </StyledBtnPop>
  );
};

const StyledBtnPop = styled.div<{
  hideArrow?: boolean;
}>`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-small);
  border: var(--border-1) solid var(--color-border-1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  z-index: 100;
  .land-pop-arrow {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: ${props => props.hideArrow ? 'rgba(0,0,0,0.68)' : 'var(--color-text-2)'};
    color: var(--color-text-light);
    border: 0;
    .land-pop-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
  &.show{
    opacity: 1;
    pointer-events: auto;
  }
`;

export default Pop