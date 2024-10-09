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
export type CheckboxProps = {
  checked?: (number | string)[];
  data?: CheckItemType[];
  onChange?: (item: CheckItemType) => void;
  style?: CSSProperties;
  className?: string;
};
const Checkbox: React.FC<CheckboxProps> = ({
  checked = [1],
  data = [{ value: 1, label: '选项1' }, { value: 2, label: '选项2' }, { value: 3, label: '选项3' }],
  onChange,
  style,
  className = ''
}) => {
  return (
    <StyleCheckboxWrap className={`land-checkbox-wrap ${className}`} style={style}>
      {
        data?.map(item =>
          <StyledCheckboxItem key={item.value} className={`land-checkbox-item ${item.info ? 'hover-pop' : ''} ${item.disabled ? 'disabled' : ''}`}>
            <Pop content={item.info} theme="dark" style={{ maxWidth: "200px" }} />
            <StyleCheckboxLabel
              onClick={(e) => {
                if (item.disabled) return;
                e.stopPropagation();
                onChange?.(item);
              }}
              className="land-checkbox-label"
            >
              <StyleCheckboxCircle className={`${checked.includes(item.value) ? "checked" : ""}`}>
                <Icon name='check' size={10} strokeWidth={0} fill="var(--color-bg-white)" />
              </StyleCheckboxCircle>
              {item.label}
            </StyleCheckboxLabel>
            {item.iconInfo && (
              <StyleCheckboxPop className="hover-pop">
                <Icon name="info-stroke" size={12} stroke="var(--color-text-4)" />
                <Pop content={item.iconInfo} theme="dark" style={{ maxWidth: "200px" }} />
              </StyleCheckboxPop>
            )}
          </StyledCheckboxItem>
        )
      }
    </StyleCheckboxWrap>
  );
};

const StyleCheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`;

const StyledCheckboxItem = styled.div`
  position: relative;
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  cursor: pointer;
  &.disabled{
    .land-checkbox-label{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`

const StyleCheckboxLabel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
`;

const StyleCheckboxCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
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

const StyleCheckboxPop = styled.div`
  position: relative;
  height: 12px;
  line-height: 12px;
`;
export default Checkbox;
