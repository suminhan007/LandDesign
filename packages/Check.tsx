import React from "react";
import styled from "styled-components";
import Pop from "./Pop";
import Icon from "./Icon";

type CheckProps = {
  checked?: boolean;
  text?: string;
  pop?: string;
  onChange?: () => void;
};
const Check: React.FC<CheckProps> = ({
  checked = false,
  text = "选项",
  pop,
  onChange,
}) => {
  return (
    <StyleCheckWrap>
      <StyleCheckLabel
        onClick={() => {
          onChange?.();
        }}
      >
        <StyleCheckCircle className={`${checked ? "checked" : ""}`}>
          <Icon name='check' size={10} strokeWidth={0} fill="var(--color-bg-white)" />
        </StyleCheckCircle>
        {text}
      </StyleCheckLabel>
      {pop && (
        <StyleCheckPop className="hover-pop">
          <Icon name='info-stroke' stroke="var(--color-text-4)" />
          <Pop
            content={pop}
            theme="dark"
            style={{ maxWidth: "200px" }}
            placement="right"
          />
        </StyleCheckPop>
      )}
    </StyleCheckWrap>
  );
};

const StyleCheckWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`;

const StyleCheckLabel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`;

const StyleCheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
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

const StyleCheckPop = styled.div`
  position: relative;
  height: 16px;
  line-height: 16px;
`;
export default Check;
