import React, { CSSProperties, forwardRef, useMemo, useState } from 'react';
import styled from 'styled-components';

export type AffixOffsetType = { left?: number, right?: number, top?: number, bottom?: number };
export type AffixContainerProps = {
  /** 快捷设置图钉位置 */
  placement?: 'lt' | 'lb' | 'rt' | 'rb';
  /** 快捷定位时图钉与四周的距离 */
  gap?: number;
  /** 自定义位置 */
  offsetData?: AffixOffsetType;
  /** hover时隐藏 */
  hover?: boolean;
  /** hover时显示 */
  hoverShow?: boolean;
  innerStyle?: CSSProperties;
  innerClassName?: string;
  style?: CSSProperties;
  className?: string;
  /** 图钉内容 */
  content?: React.ReactNode;
  children?: React.ReactNode;
  [key: string]: any;
};

const AffixContainer: React.FC<AffixContainerProps> = forwardRef(({
  placement = 'rt',
  gap = 8,
  offsetData,
  hover = false,
  hoverShow = false,
  innerStyle,
  innerClassName = '',
  content,
  style,
  className = '',
  children,
}, ref: any) => {
  const show = useMemo(() => (!hover && !hoverShow), [hover, hoverShow]);
  const [showAffix, setShowAffix] = useState<boolean>(hover || !hoverShow);
  return (
    <StyledAffixContainerWrap
      ref={ref}
      className={className}
      style={style}
      onMouseOver={() => {
        if (show) return;
        hover ? setShowAffix(false) : setShowAffix(true);
      }}
      onMouseLeave={() => {
        if (show) return;
        hover ? setShowAffix(true) : setShowAffix(false);
      }}
    >
      {children}
      {content && <StyleContainerTag
        className={`land-sffixContainer-inner ${innerClassName}`}
        style={{
          left: offsetData?.left || (placement === 'lt' || placement === 'lb') ? gap : 'auto',
          right: offsetData?.right || (placement === 'rt' || placement === 'rb') ? gap : 'auto',
          top: offsetData?.top || (placement === 'lt' || placement === 'rt') ? gap : 'auto',
          bottom: offsetData?.bottom || (placement === 'lb' || placement === 'rb') ? gap : 'auto',
          opacity: show ? 1 : showAffix ? 1 : 0,
          ...innerStyle,
        }}
        onClick={(e: React.UIEvent) => e.stopPropagation()}
        hoverShow={hoverShow}
      >{content}</StyleContainerTag>}
    </StyledAffixContainerWrap >
  )
});

const StyledAffixContainerWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .land-sffixContainer-inner{
    
  }
`;

const StyleContainerTag = styled.div<{
  hoverShow?: boolean;
}>`
  position: absolute;
  opacity: ${props => (props.hoverShow ? 0 : 1)};
  font-family: inherit;
  z-index: 100;
  transition: opacity var(--transition-15s) linear;
  `;

export default AffixContainer;
