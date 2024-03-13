import React, { CSSProperties } from 'react'
import styled from 'styled-components'

export type TitleProps = {
    /* 标题内容 */
    title?: string;
    /* 标题层级 */
    type?: 'first' | 'second' | 'third'
    /* 标题前缀 */
    prefix?: string;
    /* 标题角标 */
    sub?: string | React.ReactNode;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
}

const Pop: React.FC<TitleProps> = ({
    title,
    type,
    prefix,
    sub,
    style,
    className,
    onClick
}) => {
    return (
        <StyledTitle className={className} style={style} onClick={() => onClick?.()}>
            {prefix && <span className='land-title-prefix'>{prefix}</span>}
            {type === 'first' && <h1>{title}</h1>}
            {type === 'second' && <h2>{title}</h2>}
            {type === 'third' && <h3>{title}</h3>}
            {sub && typeof(sub) === 'string' ? <div className='land-title-sub'>{sub}</div> : <>{sub}</> }
        </StyledTitle>
    )
}

const StyledTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  .land-title-sub{
    position: absolute;
    top: -50%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
`

export default Pop