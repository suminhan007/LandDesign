import React, { Fragment } from "react";
import styled from "styled-components";
import Pop from "./Pop";
import Icon from "./Icon";

type CheckItemType = {
  value: number,
  label: string,
  pop?: string
}
export type RadioProps = {
  checked?: number;
  data?: CheckItemType[];
  onChange?: (data: CheckItemType) => void;
};
const Radio: React.FC<RadioProps> = ({
  checked = 1,
  data = [{ value: 1, label: '选项1' }, { value: 2, label: '选项2' }, { value: 3, label: '选项3' }],
  onChange,
}) => {
  return (
    <StyleRadioWrap>
      {
        data?.map(item =>
          <Fragment>
            <StyleRadioLabel
              onClick={(e) => {
                e.stopPropagation();
                onChange?.(item);
              }}
            >
              <StyleRadioCircle className={`${checked === item.value ? "checked" : ""}`}>
                <Icon name='check' size={10} strokeWidth={0} fill="var(--color-bg-white)" />
              </StyleRadioCircle>
              {item.label}
            </StyleRadioLabel>
            {item.pop && (
              <StyleRadiopop className="hover-pop">
                <Icon name="info-stroke" stroke="var(--color-text-4)" />
                <Pop content={item.pop} theme="dark" style={{ maxWidth: "200px" }} />
              </StyleRadiopop>
            )}
          </Fragment>
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
const StyleRadioLabel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`;

const StyleRadioCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
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

const StyleRadiopop = styled.div`
  position: relative;
  height: 16px;
`;
export default Radio;
