import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Icon from "./Icon";
import Pop from "./Pop";
import Flex from "./Flex";


type dropProps = {
  data?: SelectTreeItemType[];
  selectedValue?: React.ReactNode;
  onClick?: (item: SelectTreeItemType) => void;
};

const SelectTreeSubDrop: React.FC<dropProps> = ({
  data,
  selectedValue,
  onClick
}) => {
  return (
    <>
      {
        data?.map(dropItem => <StyleSelectTreeDropItem
          className={`${dropItem.tip ? 'hover-pop' : ''} ${selectedValue === dropItem.value ? "selected" : ""} ${dropItem.disabled ? "disabled" : ""
            }`}
          key={dropItem.value}
          onClick={() => onClick?.(dropItem)}
        >
          <div className="land-select-results-item-label">{dropItem.label}</div>
          {dropItem.info && <div className={`land-select-item-info ${dropItem.info ? 'hover-pop' : ''}`}>
            <Icon name="info-stroke" />
            {dropItem.info && <Pop content={dropItem.info} placement="right" theme="dark" style={{ marginLeft: '12px' }} />}
          </div>}
          {dropItem.tip && <Pop content={dropItem.tip} placement="right" theme="dark" style={{ marginLeft: '8px' }} />}
        </StyleSelectTreeDropItem>
        )
      }
    </>
  )
}
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
  width,
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
  const [showSec, setShowSec] = useState<string | number>(undefined);
  /** 当前展示值 */
  const [resultValue, setResultValue] = useState<React.ReactNode>();
  /** 当前选中值 */
  const [selectedValue, setSelectedValue] = useState<string | number>();
  useEffect(() => {
    if (!show) setShowSec(undefined);
  }, [show])
  return (
    <StyleSelectTreeWrap
      style={{
        width: width ? 'fit-content' : typeof width === "number" ? `${width}px` : width,
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
            : resultValue}
        </p>
        <Icon name="arrow" className="land-select-value-arrow" />
        {info && <Pop content={info} theme="dark" />}
      </StyleSelectTreeInput>
      <StyleSelectTreeResults
        className={`land-select-results ${show ? "show" : ""}`}
      >
        <StyleSelectTreeDrop>
          {data?.map((item) => (
            <StyleSelectTreeDropItem
              className={`${item.tip ? 'hover-pop' : ''} ${resultValue === item.label ? "selected" : ""} ${(showSec === item.value || item.children?.filter(itm => itm.value === selectedValue).length > 0) ? 'open' : ''} ${item.disabled ? "disabled" : ""
                }`}
              key={item.value}
              onClick={() => {
                if (item.disabled) return;
                if (item.children?.length > 0) {
                  setShowSec(item.value)
                } else {
                  setNewSelectedTree(item.value);
                  onChange?.(item);
                  setResultValue(item.label);
                  setShow(false);
                }
              }}
            >
              <div className="land-select-results-item-label">{item.label}</div>
              {item.info && <div className={`land-select-item-info ${item.info ? 'hover-pop' : ''}`}>
                <Icon name="info-stroke" size={12} />
                {item.info && <Pop content={item.info} placement="right" theme="dark" style={{ marginLeft: '12px' }} />}
              </div>}
              {item.tip && <Pop content={item.tip} placement="right" theme="dark" style={{ marginLeft: '8px' }} />}

              {item.children?.length > 0 && <Icon name="arrow" className="land-select-item-arrow" />}
              {/* 二级 */}
              {item.children && <StyleSelectTreeSubDrop show={showSec != undefined}>
                <SelectTreeSubDrop
                  data={item.children}
                  selectedValue={selectedValue}
                  onClick={(dropItem => {
                    setNewSelectedTree(dropItem.value);
                    setSelectedValue(dropItem.value);
                    onChange?.(dropItem);
                    setResultValue(<Flex align="center" gap={2}>{item.label}<Icon name="arrow" stroke="var(--color-text-5)" className="land-select-value-divider-arrow" />{dropItem.label}</Flex>);
                    setShow(false);
                  })}
                />
              </StyleSelectTreeSubDrop>
              }
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
  width: fit-content;
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
    white-space: nowrap;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  .land-select-value-arrow {
    transition: transform var(--transition-15) ease;
  }
  .land-select-value-divider-arrow{
    transform: rotate(-90deg);
  }
  &.show .land-select-value-arrow {
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
  box-shadow: var(--boxshadow-small);
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
  &.open{
    background-color: var(--color-bg-1);
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

const StyleSelectTreeSubDrop = styled.ul<{
  show?: boolean;
}>`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translateX(8px);
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: var(--padding-small);
  max-height: 200px;
  overflow: auto;
  white-space: nowrap;
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  transition: opacity var(--transition-15) linear;
  box-shadow: var(--boxshadow-small);
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'all' : 'none'};
  &::-webkit-scrollbar{
    width: 0px;
    display: none;
  }

`
export default SelectTree;
