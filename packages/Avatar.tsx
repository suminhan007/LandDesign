import React, { CSSProperties } from 'react'
import styled from 'styled-components';
import Icon from './Icon';
import Pop, {PopProps} from './Pop';
import Image from './Image';

export type AvatarProps = {
  /** 名称 */
  name?: string;
  /** 名称缩写 */
  abbreviationName?: string;
  /** 头像图片地址 */
  imgUrl?: string;
  /** 特殊头像 */
  content?: React.ReactNode;
  /** 头像尺寸 */
  size?: number;
  /** 头像圆角：默认为圆形 */
  radius?: number;
  /** 头像框背景 */
  bg?: string;
  /** 头像框字体颜色 */
  color?: string;
  /** 头像框边框 */
  border?: string;
  pop?:React.ReactNode;
  popProps?: PopProps,
  style?: CSSProperties;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  name = '',
  abbreviationName = name.slice(0, 1),
  imgUrl,
  content,
  size = 48,
  radius,
  bg = 'var(--color-primary-2)',
  color = 'var(--color-primary-6)',
  border = '',
                                         pop,
                                         popProps,
  style,
  className = '',
}) => {
  return (
    <StyledAvatarWrap
      className={`land-avatar hover-pop ${className}`}
      style={style}
      size={size}
      radius={radius ? `${radius}px` : '100%'}
      bg={bg}
      color={color}
      border={border}
    >
      {name && <>
        <p className='land-avatar-name ellipsis'>{abbreviationName}</p>
        {pop && <Pop content={pop} {...popProps}/>}
      </>}
      {imgUrl && <div className='land-avatar-hidden-container'><Image url={imgUrl} /></div>}
      {content}
      {(!name && !imgUrl && !content) && <div className='land-avatar-hidden-container'>
        <Icon name='avatar' stroke={color} size={size / 1.35} strokeWidth={3} />
      </div>}
    </StyledAvatarWrap>
  )
}

const StyledAvatarWrap = styled.div<{
  size?: number;
  radius?: string;
  bg?: string;
  color?: string;
  border?: string;
}>`
  &.land-avatar{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: ${props => props.radius};
    background-color: ${props => props.bg};
    border: ${props => props.border};
    box-sizing: border-box;
    cursor: default;
    .land-avatar-name{
      color: ${props => props.color};
      font-size: 20px;
      font-weight: 500;
    }
    .land-avatar-hidden-container{
      display: flex;
      align-items: end;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: ${props => props.radius};
      overflow: hidden;
    }
  }
`;
export default Avatar;