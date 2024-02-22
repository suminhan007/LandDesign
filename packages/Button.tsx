import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { IconLoading } from './Icon';
import Pop from './Pop';

export type ButtonProps = {
  /* 按钮主要文案 */
  text?: string;
  /* 按钮次要文案 */
  subText?: string;
  /* 按钮图标 */
  icon?: React.ReactNode | string;
  width?: string | number;
  height?: string | number;
  /* 按钮文字对齐方式 */
  justify?: 'center' | 'start' | 'end';
  /* 按钮风格 */
  type?: 'text' | 'background' | 'background-light' | 'border' | 'border-dashed' | 'line';
  /* 按钮状态 */
  status?: 'default' | 'active' | 'loading' | 'disabled';
  /* 按钮气泡 */
  pop?: React.ReactNode | string;
  /* 按钮点击事件 */
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  subText,
  icon,
  width,
  height,
  justify = 'center',
  type = 'solid',
  status = 'default',
  pop,
  onClick,
  style,
  className
}) => {
  return (
    <StyledButton
      className={`${type} ${status} ${className}`}
      style={{
        width: width || 'fit-content',
        height: height || 'fit-content',
        ...style
      }}
      onClick={onClick}
      justify={justify}
    >
      {status === 'loading' ? <IconLoading /> : icon}
      <div>
        <span>{text}</span>
        <span className='subText'>{subText}</span>
      </div>
      {pop && <Pop content={pop} />}
    </StyledButton>
  )
}

const StyledButton = styled.div<{
  justify?: string;
}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    gap: 8px;
    padding: 8px 12px;
    color: #555;
    border-radius: 6px;
    box-sizing: border-box;
    transition: background-color .2s linear;
    cursor: pointer;
    .subText{
      margin-left: 4px;
      font-size: 12px;
      opacity: 0.68;
    }
    /* 类型 */
    &.text{
      color: #202020;
    }
    &.background{
      color: #82acff;
      background-color: #f5f5f5;
      &.active{
        color: #fff;
        background-color: rgba(179, 204, 255, 1);
      }
    }
    &.background-light{
      background-color: #f5f5f5;
      &.active{
        color: #fff;
        /* background-color: rgba(179, 204, 255, 1); */
      }
    }
    &.border{
      border: 1px solid #eee;
    }
    &.border-dashed{
      border: 1px dashed #eee;
    }
    &.line{
      border-radius: 0px;
      border-bottom: 1px solid #eee;
    }
    /* 状态 */
    &.active{
      color: rgba(179, 204, 255, 1);
      border-color: rgba(179, 204, 255, 1);
    }
    &.disabled{
      opacity: 0.48;
    } 
    /* 主题 */
    &:hover:not(.active){
      background-color: #fafafa;
    }
    &:active:not(.active){
      background-color: #f8f8f8;
    }
    &:hover{
      .StyledBtnPop{
        transform: scale(1) translate(-50%,0);
      }
    }
`

export default Button
