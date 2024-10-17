import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

type CollapseProps = {
  data?: { title: string; details?: string | React.ReactNode }[];
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
        />
      ))}
    </StyledLandCollapse>
  );
};

type Props = {
  title?: string;
  content?: string | React.ReactNode;
  hideIcon?: boolean;
};

const CollapseItem: React.FC<Props> = ({ title, hideIcon, content }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`land-collapse-item ${open ? "open" : ""}`}>
      <div className="land-collapse-item-title" onClick={() => setOpen(!open)}>
        {!hideIcon && <Icon name="arrow" strokeWidth={4} />}
        {title}
      </div>
      <div className="land-collapse-item-details">{content}</div>
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
      height: 0px;
      color: var(--color-text-4);
      overflow: hidden;
    }
    &.open {
      .land-collapse-item-title {
        svg {
          transform: rotate(0deg);
        }
      }
      .land-collapse-item-details {
        padding: 12px 0;
        height: fit-content;
      }
    }
  }
`;

export default Collapse;
