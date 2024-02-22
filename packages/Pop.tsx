import React, { CSSProperties } from 'react'
import styled from 'styled-components'

export type PopProps = {
    content?: React.ReactNode | string;
    style?: CSSProperties;
    className?: string;
}

const Pop: React.FC<PopProps> = ({
    content,
    style,
    className
}) => {
    return (
        <StyledBtnPop>
            {content}
        </StyledBtnPop>
    )
}

const StyledBtnPop = styled.div`
  position: absolute;
  padding: 12px;
  width: fit-content;
  max-width: calc(100% - 18px);
  top: -48px;
  left: 50%;
  font-size: 14px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 0 4px #dadada;
  border: 1px solid #eee;
  transform: scale(0) translate(-50%,0);
  pointer-events: none;
  transition: transform .2s linear;
`

export default Pop