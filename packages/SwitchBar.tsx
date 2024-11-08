import { Fragment } from "react";
import styled from "styled-components";
import { CommonProps } from "./types";
import Divider from "./Divider";
import Pop from "./Pop";
import Icon from "./Icon";
import Button from "./Button";

export type MsSwitchItemType<T = React.ReactNode> = {
  value: any;
  label: T;
  disabled?: boolean;
  tip?: T;
  iconTip?: T;
  showIcon?: boolean;
};
type Props<T = any> = {
  width?: string;
  /** 当前选中 */
  value?: T | T[];
  /** 数据 */
  data?: MsSwitchItemType[];
  /** 选项间是否有分割线 */
  useDivider?: boolean;
  /** 点击事件 */
  onChange?: (value: T, item?: MsSwitchItemType) => void;
  activeClassName?: string;
  switchDisabled?: boolean;
} & CommonProps;

function SwitchBar<T>({
  width = "100%",
  value,
  data,
  useDivider = false,
  onChange,
  activeClassName = "",
  className = "",
  switchDisabled,
  style,
}: Props<T>) {
  return (
    <StyledLandSwitchBarWrap
      className={`land-switchBar  ${className}`}
      style={{ width, ...style }}
    >
      {data?.map((item, index) => (
        <Fragment key={item.value as any}>
          {useDivider && index !== 0 && (
            <Divider
              direction="column"
              margin={0}
              lang="14px"
              className={`transition-2s ${
                value !== item.value && value !== item.value - 1
                  ? "opacity-1"
                  : "opacity-0"
              }`}
            />
          )}
          <StyledSwitchButton
            type="background"
            disabled={item.disabled || switchDisabled}
            pop={item.tip}
            className={`flex-1 flex items-center justify-center gap-4 transition-2s shrink-0 ${
              Array.isArray(value)
                ? value?.includes(item.value)
                : value === item.value
                ? `selected color-gray-2 ${activeClassName}`
                : item.disabled
                ? "color-gray-5"
                : "color-gray-3"
            }`}
            width="auto"
            onClick={(e) => {
              e.stopPropagation();
              !item.disabled && onChange?.(item.value, item);
            }}
          >
            {item.label}
            {item.showIcon && (
              <div className="size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default">
                <Icon name="info-stroke" size={12} />
                <Pop content={item.iconTip} />
              </div>
            )}
          </StyledSwitchButton>
        </Fragment>
      ))}
    </StyledLandSwitchBarWrap>
  );
}

const StyledLandSwitchBarWrap = styled.div`
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: var(--color-bg-1);
  border-radius: var(--radius-8);
`;
const StyledSwitchButton = styled(Button)`
  border: none;
  padding: unset;
  &.background.default {
    background-color: transparent;
  }
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  &.background.default.selected {
    background-color: var(--color-text-white);
    &:hover,
    &:active {
      background-color: var(--color-text-white);
    }
  }
`;

export default SwitchBar;
