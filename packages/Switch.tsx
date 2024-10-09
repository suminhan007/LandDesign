import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Pop, { PopProps } from "./Pop";

export type SwitchProps = {
  /** 是否开启 */
  checked?: boolean;
  /** 秒数文字 */
  label?: string;
  /** 开启后的描述文字 */
  checkedLabel?: string;
  /** 默认图标 */
  icon?: React.ReactNode;
  /** 开启后的图标 */
  checkedIcon?: React.ReactNode;
  /** 整体提示内容 */
  info?: React.ReactNode;
  /** 图标提示内容 */
  iconInfo?: React.ReactNode;
  /** 提示内容属性 */
  popProps?: PopProps;
  /** 暗黑模式 */
  dark?: boolean;
  /** 禁用 */
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: CSSProperties;
  className?: string;
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  label,
  checkedLabel,
  icon,
  checkedIcon,
  info,
  iconInfo,
  popProps,
  onChange,
  dark,
  disabled,
  style,
  className = "",
}) => {
  const [newChecked, setNewChecked] = useState<boolean>(checked);
  useEffect(() => setNewChecked(checked), [checked]);

  return (
    <StyledSwitchWrap className={`land-switch-wrap ${info ? 'hover-pop' : ''} ${disabled ? 'disabled' : ''}`}>
      <Pop content={info} theme="dark" {...popProps} />
      <StyledSwitchContent
        className={`land-switch-content ${dark ? 'dark' : ''} ${newChecked ? "checked" : ""
          } ${className}`}
        style={style}
        onClick={() => {
          if (disabled) return;
          setNewChecked(!newChecked);
          onChange?.(newChecked);
        }}
      >
        <div className="land-switch-bar">
          <div className="land-switch-indicator">
            {newChecked ? checkedIcon : icon}
          </div>
        </div>
        {(label || checkedLabel) && (
          <div className="land-switch-label">
            {newChecked ? checkedLabel : label}
          </div>
        )}
      </StyledSwitchContent>
      {iconInfo && (
        <div className="land-switch-label-iconInfo hover-pop">
          <Icon name="info-stroke" size={16} />
          <Pop content={iconInfo} theme="dark"  {...popProps} />
        </div>
      )}
    </StyledSwitchWrap>
  );
};

const StyledSwitchWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  &.disabled{
    .land-switch-content{
      opacity: var(--opacity-04);
      cursor: not-allowed;
    }
    cursor: not-allowed;
  }
`;

const StyledSwitchContent = styled.div<{
  dark?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  cursor: pointer;
  .land-switch-bar {
    display: flex;
    justify-content: start;
    padding: 2px;
    width: 40px;
    height: 24px;
    background-color: var(--color-bg-2);
    border-radius: 24px;
    flex-shrink: 0;
    transition: background-color var(--transition-15) linear;
    &:hover {
      background-color: var(--color-bg-2);
    }
    &:active {
      background-color: var(--color-bg-3);
    }
  }
  .land-switch-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--color-bg-white);
    border-radius: 100%;
    transform: translateX(0px);
    transition: transform var(--transition-15) linear;
  }
  .land-switch-label {
    font-size: var(--font-content-medium);
    color: var(--color-text-3);
  }
  & + .land-switch-label-iconInfo {
    position: relative;
    height: 16px;
    cursor: default;
  }
  &.checked {
    .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    .land-switch-indicator {
      transform: translateX(16px);
    }
  }
  &.dark{
    .land-switch-bar{
      background-color: rgba(0,0,0,0.2);
      &:hover {
        background-color: rgba(0,0,0,0.2);
      }
    }
    &.checked{
      .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    }
    }
`;

export default Switch;
