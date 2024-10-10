import React from 'react'
import styled from 'styled-components';

type BadgeProps = {
  /** 是否为点 */
  isDot?: boolean;
  /** 徽标数值 */
  count?: number;
  /** 显示的最大数： 超过则缩略显示 */
  exceedCount?: number;
  /** 其他内容徽标 */
  content?: React.ReactNode;
  /** 徽标圆角: 默认为圆形 */
  radius?: number;
  /** 徽标背景色 */
  bg?: string;
  /** 徽标字体色 */
  color?: string;
  /** 徽标边框 */
  border?: string;
  children?: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({
  isDot,
  count,
  exceedCount = 99,
  content,
  radius = 20,
  bg = 'var(--color-red-6)',
  color = 'var(--color-text-white)',
  border = '',
  children,
}) => {
  function isOnlyUppercase(str) {
    // 正则表达式匹配仅包含大写字母和中文字符
    const regex = /^[A-Z]+$/;
    return regex.test(str);
  }
  return (
    <StyledBadgeWrap className='land-badge-wrap' radius={`${radius}px`} isDot={isDot} bg={bg} color={color} border={border} large={isOnlyUppercase(`${count || content}`)}>
      <div className='land-badge-content'>
        {isDot ? null : content ? content : count <= exceedCount ? count : `${exceedCount}+`}
      </div>
      {children}
    </StyledBadgeWrap>
  )
}

const StyledBadgeWrap = styled.div<{
  radius?: string;
  isDot?: boolean;
  bg?: string;
  color?: string;
  border?: string;
  large?: boolean;
}>`
  &.land-badge-wrap{
    position: relative;
    .land-badge-content{
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--gap-2);
      padding:${props => props.isDot ? '' : '0 6px'};
      min-width: ${props => props.isDot ? '8px' : '20px'};
      height: ${props => props.isDot ? '8px' : '20px'};
      box-sizing: border-box;
      border-radius: ${props => props.radius};
      background-color: ${props => props.bg};
      color: ${props => props.color};
      border: ${props => props.border};
      font-size: ${props => props.large ? '10px' : '12px'};
      font-weight: ${props => props.large ? 500 : 400};
      transform: translate(30%,-30%);
    }
  }
`;

export default Badge;
