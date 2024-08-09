import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Icon from "./Icon";
import Pop from "./Pop";

type SelectTreeItemType = {
  /** 唯一标识 */
  value: string | number;
  label: React.ReactNode;
  /** 选项提示内容*/
  tip?: React.ReactNode;
  /** 选项图标类型提示 */
  info?: React.ReactNode;
  disabled?: boolean;
  children?: SelectTreeItemType[];
};
export type SelectTreeProps = {
  /** 数据 */
  data?: SelectTreeItemType[];
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
  onChange?: (item: SelectTreeItemType) => void;
  className?: string;
  style?: CSSProperties;
};
const SelectTree: React.FC<SelectTreeProps> = ({
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
  const [show, setShow] = useState<boolean>(false);
  const [newSelectedTree, setNewSelectedTree] = useState<string | number>(selected);
  return (
    <StyleSelectTreeWrap
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        ...style,
      }}
      className={className}
    >
      {title && <Title title={title} type="p" info={titleInfo} />}
      <StyleSelectTreeInput
        className={`hover-pop ${show ? "show" : ""} ${disabled ? 'disabled' : ''}`}
        onClick={(e: React.UIEvent) => { if (disabled) return; e.stopPropagation(); setShow(!show); }}
      >
        <p
          className={`${newSelectedTree !== "0"
            ? "land-select-trigger"
            : "land-select-placeholder"
            }`}
        >
          {newSelectedTree === "0"
            ? placeholder
            : data?.filter((itm) => itm.value === newSelectedTree)[0].label}
        </p>
        <Icon name="arrow" className="land-select-value-arrow" />
        {info && <Pop content={info} />}
      </StyleSelectTreeInput>
      <StyleSelectTreeResults
        className={`land-select-results ${show ? "show" : ""}`}
      >
        <StyleSelectTreeDrop>
          {data?.map((item) => (
            <StyleSelectTreeDropItem
              className={`${item.tip ? 'hover-pop' : ''} ${newSelectedTree === item.value ? "selected" : ""} ${item.disabled ? "disabled" : ""
                }`}
              key={item.value}
              onClick={() => {
                if (item.disabled) return;
                if (item.children?.length > 0) {

                } else {
                  setNewSelectedTree(item.value);
                  onChange?.(item);
                  setShow(false);
                }
              }}
            >
              <div className="land-select-results-item-label">{item.label}</div>
              {item.info && <div className={`land-select-item-info ${item.info ? 'hover-pop' : ''}`}>
                <Icon name="info-stroke" />
                {item.info && <Pop content={item.info} placement="right" style={{ marginLeft: '12px' }} />}
              </div>}
              {item.tip && <Pop content={item.tip} placement="right" style={{ marginLeft: '8px' }} />}

              {item.children?.length > 0 && <Icon name="arrow" className="land-select-item-arrow" />}

            </StyleSelectTreeDropItem>
          ))}
        </StyleSelectTreeDrop>
      </StyleSelectTreeResults>
    </StyleSelectTreeWrap>
  );
};

const StyleSelectTreeWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`;
const StyleSelectTreeInput = styled.div`
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
const StyleSelectTreeResults = styled.div`
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

const StyleSelectTreeDrop = styled.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`;
const StyleSelectTreeDropItem = styled.li`
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

  .land-select-item-arrow{
    transform: rotate(-90deg);
  }
`;
export default SelectTree;
