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

const CollapseItem: React.FC<Props> = ({ open = false, title, hideIcon, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  useEffect(() => setIsOpen(open), [open]);
  const detailsRef = useRef<HTMLDivElement>(null);
  const detailsHeightRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`land-collapse-item ${isOpen ? "open" : ""}`}>
      <div className="land-collapse-item-title" onClick={() => {
        setIsOpen(!isOpen);
        if (!isOpen && detailsRef.current && detailsHeightRef.current) {
          detailsRef.current.style.height = `${detailsHeightRef.current.offsetHeight}px`
        }
      }}>
        {!hideIcon && <Icon name="arrow" strokeWidth={4} />}
        {title}
      </div>
      <div ref={detailsRef} className="land-collapse-item-details" style={{ height: isOpen ? 'auto' : '0px' }}>
        <div ref={detailsHeightRef} className="land-collapse-item-details-content">{content}</div>
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
    transition: height 0.var(--transition-15) cubic-bezier(.38,0,.24,1);
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
      transition: height var(--transition-15) linear;
      .land-collapse-item-details-content{
        height: fit-content;
        padding: 12px 12px 0;
      }
    }
    &.open {
      .land-collapse-item-title {
        svg {
          transform: rotate(0deg);
        }
      }
      .land-collapse-item-details {
        height: auto;
        visibility: visible;
      }
    }
  }
`;

export default Collapse;
