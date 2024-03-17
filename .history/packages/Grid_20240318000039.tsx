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