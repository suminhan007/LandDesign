import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import Icon from './Icon';
import Input from './Input';

export type NumberInputProps = {
  value?: number;
  type?: 'border' | 'background';
  step?: number;
  min?: number;
  max?: number;
  suffix?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?: (event: any, value: number) => void;
  [key: string]: any;
};

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  type = 'border',
  step = 1,
  min = 0,
  max = 100,
  suffix,
  disabled,
  onChange,
  className,
  style,
  ...restProps
}) => {
  const [newValue, setNewValue] = useState<number>(value);
  const handleValueChange = (e: any, val: number) => {
    if (val < (min - step / 2) || val > (max + step / 2)) {
      return;
    } else {
      setNewValue(val);
      onChange?.(e, val);
    }
  }
  return (
    <StyledNumberInputWrap
      className='StyledNumberInputWrap'
      style={style}
      onClick={(e) => e.stopPropagation()}
      suffix={suffix}
    >
      <Input
        type={type}
        inputType='number'
        value={newValue}
        disabled={disabled}
        onChange={(value, e) => {
          if (Number(value) > max || Number(value) < min) return;
          setNewValue(Number(value));
          onChange?.(e, Number(value));
        }}
        showClear={false}
        style={{
          paddingRight: '32px'
        }}
        {...restProps}
      />
      <div className='land-numberInput-arrow' style={{ borderLeft: type === 'border' ? '1px solid var(--color-border-2)' : '', background: 'inherit' }}>
        <div className={`land-numberInput-add ${newValue === max ? 'disabled' : ''}`} onClick={(e: any) => handleValueChange?.(e, Number(newValue) + step)}><Icon name="arrow" /></div>
        {type === 'border' && <Divider margin={0} lang='32px' />}
        <div className={`land-numberInput-dec ${newValue === min ? 'disabled' : ''}`} onClick={(e: any) => handleValueChange?.(e, Number(newValue) - step)}><Icon name="arrow" /></div>
      </div>
    </StyledNumberInputWrap>
  )
};

const StyledNumberInputWrap = styled.div<{
  suffix?: string;
}>`
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
  &::after{
    content: ${props => props.suffix};
    display: block;
    position: absolute;
  }
`

export default NumberInput;
