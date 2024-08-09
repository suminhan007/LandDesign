import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Pop, { PopProps } from "./Pop";
import Flex from "./Flex";

export type SwitchProps = {
  checked?: boolean;
  label?: string;
  checkedLabel?: string;
  info?: React.ReactNode;
  popProps?: PopProps;
  onChange?: (checked: boolean) => void;
  style?: CSSProperties;
  className?: string;
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  label,
  checkedLabel,
  info,
  popProps,
  onChange,
  style,
  className
}) => {
  const [newChecked, setNewChecked] = useState<boolean>(checked);
  useEffect(() => setNewChecked(checked), [checked]);

  return <Flex gap={8} align="center">
    <StyledSwitchWrap className={`land-switch-wrap ${newChecked ? 'checked' : ''} ${className}`} style={style} onClick={() => { setNewChecked(!newChecked); onChange?.(newChecked) }}>
      <div className="land-switch-bar"><div className="land-switch-indicator"></div></div>
      {(label || checkedLabel) && <div className="land-switch-label">{newChecked ? checkedLabel : label}</div>}
    </StyledSwitchWrap>
    {info && <div className="land-switch-label-info hover-pop">
      <Icon name="info-stroke" size={16} />
      <Pop content={info} {...popProps} />
    </div>}
  </Flex>
    ;
};

const StyledSwitchWrap = styled.div<{

}>`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  cursor: pointer;
  .land-switch-bar{
    padding: 2px;
    width: 40px;
    height: 24px;
    background-color: var(--color-bg-1);
    border-radius: 12px;
    flex-shrink: 0;
    transition: background-color var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-2);
    }
    &:active{
      background-color: var(--color-bg-3);
    }
  }
  .land-switch-indicator{
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--color-bg-white);
    border-radius: 100%;
    transform: translateX(0px);
    transition: transform var(--transition-15) linear;
  }
  .land-switch-label{
    font-size: var(--font-content-medium);
    color: var(--color-text-3);
  }
  &+.land-switch-label-info{
    position: relative;
    height: 16px;
    cursor: default;
  }
  &.checked{
    .land-switch-bar{
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    .land-switch-indicator{
      transform: translateX(16px);
    }
  }
`;

export default Switch;
