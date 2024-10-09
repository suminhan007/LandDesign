import React, { CSSProperties } from "react";
import styled from "styled-components";
import Pop from "./Pop";
import Icon from "./Icon";

type CheckItemType = {
  value: number | string;
  label: string;
  /** 整个选项提示内容 */
  info?: React.ReactNode;
  disabled?: boolean;
  /** 图标提示内容 */
  iconInfo?: React.ReactNode;
}
export type RadioProps = {
  checked?: number | string;
  data?: CheckItemType[];
  onChange?: (item: CheckItemType) => void;
  style?: CSSProperties;
  className?: string;
};
const Radio: React.FC<RadioProps> = ({
  checked = 1,
  data = [],
  onChange,
  style,
  className = ''
}) => {
  return (
    <StyleRadioWrap className={`land-radio-wrap ${className}`} style={style}>
      {
        data?.map(item =>
          <StyledRadioItem key={item.value} className={`land-radio-item ${item.info ? 'hover-pop' : ''} ${item.disabled ? 'disabled' : ''}`}>
            <Pop content={item.info} theme="dark" style={{ maxWidth: "200px" }} />
            <StyleRadioLabel
              onClick={(e) => {
                if (item.disabled) return;
                e.stopPropagation();
                onChange?.(item);
              }}
              className="land-radio-label"
            >
              <StyleRadioCircle className={`${checked === item.value ? "checked" : ""}`}>
                <Icon name='check' size={10} strokeWidth={0} fill={checked === item.value ? 'var(--color-bg-white)' : 'inherit'} />
              </StyleRadioCircle>
              {item.label}
            </StyleRadioLabel>
            {item.iconInfo && (
              <StyleRadioPop className="hover-pop">
                <Icon name="info-stroke" stroke="var(--color-text-4)" size={12} />
                <Pop content={item.iconInfo} theme="dark" style={{ maxWidth: "200px" }} />
              </StyleRadioPop>
            )}
          </StyledRadioItem>
        )
      }
    </StyleRadioWrap>
  );
};

const StyleRadioWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`;

const StyledRadioItem = styled.div`
  position: relative;
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  cursor: pointer;
  &.disabled{
    .land-radio-label{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`
const StyleRadioLabel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  white-space: nowrap;
`;

const StyleRadioCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-border-3);
  flex-shrink: 0;
  transition: all var(--transition-15) linear;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`;

const StyleRadioPop = styled.div`
  position: relative;
  height: 12px;
  line-height: 12px;
`;
export default Radio;
