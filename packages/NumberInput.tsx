import React, { CSSProperties, useCallback, useState } from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import Icon from './Icon';
import Input, { InputProps } from './Input';

export type NumberInputProps = {
  /** 当前输入值 */
  value?: number;
  /** 输入框样式 */
  type?: 'border' | 'background';
  /** 调整步数 */
  step?: number;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 前缀 */
  prefix?: string;
  /** 单位 */
  suffix?: string;
  /** 是否禁用输入框 */
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: (value: number, event: any,) => void;
} & InputProps;

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  type = 'border',
  step = 1,
  min = 0,
  max = 100,
  prefix,
  suffix,
  disabled,
  onChange,
  className,
  style,
  ...restProps
}) => {
  const [newValue, setNewValue] = useState<number>(value);
  const handleValueChange = (val: number, e: any) => {
    if (val < (min - step / 2) || val > (max + step / 2)) {
      return;
    } else {
      setNewValue(val);
      onChange?.(val, e);
    }
  }
  const handleNumberInputChange = useCallback((value, e) => {
    if (Number(value) > max || Number(value) < min || (typeof value === 'number' && Boolean(value % step))) return;
    setNewValue(Number(value));
    onChange?.(Number(value), e);
  }, []);
  return (
    <StyledNumberInputWrap
      className='StyledNumberInputWrap'
      style={style}
      onClick={(e) => e.stopPropagation()}
    >
      <Input
        type={type}
        inputType='number'
        value={String(newValue)}
        disabled={disabled}
        prefix={prefix}
        suffix={suffix}
        onChange={(value, e) => handleNumberInputChange(value, e)}
        wrapStyle={{
          paddingRight: '32px'
        }}
        {...restProps}
      />
      <div className='land-numberInput-arrow' style={{ borderLeft: type === 'border' ? '1px solid var(--color-border-2)' : '', background: 'inherit' }}>
        <div className={`land-numberInput-add ${newValue === max ? 'disabled' : ''}`} onClick={(e: any) => handleValueChange?.(Number(newValue) + step, e,)}><Icon name="arrow" /></div>
        {type === 'border' && <Divider margin={0} lang='32px' />}
        <div className={`land-numberInput-dec ${newValue === min ? 'disabled' : ''}`} onClick={(e: any) => handleValueChange?.(Number(newValue) - step, e)}><Icon name="arrow" /></div>
      </div>
    </StyledNumberInputWrap>
  )
};

const StyledNumberInputWrap = styled.div`
  position: relative;
  input{
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      height: auto;
      -webkit-appearance: none;
    }
  }
  .land-numberInput-arrow{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 100%;
    color: var(--color-text-4);
    
    .land-numberInput-add svg{
      transform: rotate(180deg);
    }
    .land-numberInput-add,
    .land-numberInput-dec{
      height: 18px;
      transition: color var(--transition-15) linear;
      cursor: pointer;
      &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &.disabled{
      cursor: not-allowed;
    }
    }
  }
`

export default NumberInput;
