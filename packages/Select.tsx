import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Icon from "./Icon";
import Pop from "./Pop";
import useClickOutside from "./hooks/useClickOutside";

type SelectItemType = {
  /** 唯一标识 */
  value: string | number;
  label: React.ReactNode;
  /** 选项提示内容*/
  tip?: React.ReactNode;
  /** 选项图标类型提示 */
  info?: React.ReactNode;
  disabled?: boolean;
};
export type SelectProps = {
  /** 数据 */
  data?: SelectItemType[];
  /** 占位符 */
  placeholder?: string;
  /** 当前选中项 */
  selected?: string | number;
  /** 宽度 */
  width?: number | string;
  /** 标题 */
  title?: string;
  /** 标题提示内容 */
  titleInfo?: React.ReactNode;
  /** 选框提示内容 */
  info?: React.ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  onChange?: (item: SelectItemType) => void;
  className?: string;
  style?: CSSProperties;
};
const Select: React.FC<SelectProps> = ({
  data,
  placeholder = "请选择",
  selected = "0",
  width = "100px",
  title,
  titleInfo,
  info,
  disabled,
  onChange,
  className = "",
  style,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [newSelected, setNewSelected] = useState<string | number>(selected);
  useEffect(() => setNewSelected(selected), [selected]);
  useClickOutside(selectRef,
    () => {
      setShow(false);
    });
  return (
    <StyleSelectWrap
      ref={selectRef}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        ...style,
      }}
      className={className}
    >
      {title && <Title title={title} type="p" info={titleInfo} />}
      <StyleSelectInput
        className={`hover-pop ${show ? "show" : ""} ${disabled ? 'disabled' : ''}`}
        onClick={(e: React.UIEvent) => { if (disabled) return; e.stopPropagation(); setShow(!show); }}
      >
        <p
          className={`${newSelected !== "0"
            ? "land-select-trigger"
            : "land-select-placeholder"
            }`}
        >
          {newSelected === "0"
            ? placeholder
            : data?.filter((itm) => itm.value === newSelected)[0].label}
        </p>
        <Icon name="arrow" className="land-select-value-arrow" />
        {info && <Pop content={info} theme="dark" />}
      </StyleSelectInput>
      <StyleSelectResults
        className={`land-select-results ${show ? "show" : ""}`}
      >
        <StyleSelectDrop>
          {data ? data?.map((item) => (
            <StyleSelectDropItem
              className={`${item.tip ? 'hover-pop' : ''} ${newSelected === item.value ? "selected" : ""} ${item.disabled ? "disabled" : ""
                }`}
              key={item.value}
              onClick={() => {
                if (item.disabled) return;
                setNewSelected(item.value);
                onChange?.(item);
                setShow(false);
              }}
            >
              <div className="land-select-results-item-label">{item.label}</div>
              {item.info && <div className={`land-select-item-info ${item.info ? 'hover-pop' : ''}`}>
                <Icon name="info-stroke" size={12} />
                {item.info && <Pop content={item.info} placement="right" theme="dark" style={{ marginLeft: '12px' }} />}
              </div>}
              {item.tip && <Pop content={item.tip} placement="right" theme="dark" style={{ marginLeft: '8px' }} />}
            </StyleSelectDropItem>
          )) : <span className="land-select-drop-empty">暂无内容</span>}
        </StyleSelectDrop>
      </StyleSelectResults>
    </StyleSelectWrap>
  );
};

const StyleSelectWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`;
const StyleSelectInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`;
const StyleSelectResults = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`;

const StyleSelectDrop = styled.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
  .land-select-drop-empty{
    padding: 8px 12px;
    font-size: 14px;
    color: var(--color-text-4);
  }
`;
const StyleSelectDropItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`;
export default Select;
