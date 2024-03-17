import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import Pop from './Pop';

export type GridProps = {
  
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Grid: React.FC<GridProps> = ({
  
  children,
  style,
  className = "",
}) => {
  
  return (
    <StyledGrid>
      
    </StyledGrid>
  );
};

const StyledGrid = styled.a<{
    color?: string;
}>`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: ${props => `${props.color}6)`};
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${props => `${props.color}6)`};
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: ${props => `${props.color}7)`};
        &::before {
            opacity: 1;
            background-color: ${props => `${props.color}7)`};
        }
    }
    &:active,
    &.actived {
        color: ${props => `${props.color}8)`};
        &::before {
            background-color: ${props => `${props.color}8)`};
        }
    }
    &.disabled {
        cursor: default;
        color: ${props => `${props.color}2)`};
        &:hover::before {
            opacity: 0;
        }
    }
`

export default Grid