import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

type CollapseProps = {
  data?: { title: string; details?: string | React.ReactNode, open?: boolean }[];
  hideIcon?: boolean;
  style?: CSSProperties;
  className?: string;
};
const Collapse: React.FC<CollapseProps> = ({
  data,
  hideIcon,
  style,
  className = "",
}) => {
  return (
    <StyledLandCollapse style={style} className={className}>
      {data?.map((i, index) => (
        <CollapseItem
          key={index}
          title={i.title}
          content={i.details}
          hideIcon={hideIcon}
          open={i.open}
        />
      ))}
    </StyledLandCollapse>
  );
};

type Props = {
  open?: boolean;
  title?: string;
  content?: string | React.ReactNode;
  hideIcon?: boolean;
};

const CollapseItem: React.FC<Props> = ({
  open = false,
  title,
  hideIcon,
  content,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  useEffect(() => setIsOpen(open), [open]);
  const detailsRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`land-collapse-item ${isOpen ? "open" : ""}`}>
      <div
        className="land-collapse-item-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!hideIcon && <Icon name="arrow" strokeWidth={4} />}
        {title}
      </div>
      <div
        ref={detailsRef}
        className="land-collapse-item-details"
        style={{
          maxHeight: isOpen ? `${detailsRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="land-collapse-item-details-content">{content}</div>
      </div>
    </div>
  );
};

const StyledLandCollapse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  .land-collapse-item {
    font-size: 14px;
    transition: height 0var (--transition-15) cubic-bezier(0.38, 0, 0.24, 1);
    .land-collapse-item-title {
      display: flex;
      align-items: center;
      color: var(--color-text-2);
      cursor: pointer;
      svg {
        transform: rotate(-90deg);
        transition: transform var(--transition-15) linear;
      }
    }
    .land-collapse-item-details {
      color: var(--color-text-4);
      overflow: hidden;
      transition: max-height var(--transition-15) linear;
      .land-collapse-item-details-content {
        padding: 12px 12px 0;
      }
    }
    &.open {
      .land-collapse-item-title {
        svg {
          transform: rotate(0deg);
        }
      }
    }
  }
`;

export default Collapse;
