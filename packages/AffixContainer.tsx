import React, { CSSProperties, ReactNode, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

export type AffixContainerItemProps = {
  /** 标签内容 */
  content?: ReactNode;
  /** 标签距离容器边距 */
  gap?: number;
  /** 圆角 */
  radius?: number | string;
  /** 暗色背景 */
  dark?: boolean;
  /** 1:1 */
  squareSize?: number;
  /** 使用默认背景 */
  custom?: boolean;
  /** hover 时显示 */
  hoverShow?: boolean;
  /** hover 时隐藏 */
  hoverHide?: boolean;
  /** 隐藏 */
  hide?: boolean;
  /** 层级 */
  zIndex?: number;
  onClick?: (e: any) => void;
  className?: string;
  style?: CSSProperties;
  left?: number | string;
  top?: number | string;
};

export type AffixContainerProps = {
  ltOption?: AffixContainerItemProps;
  rtOption?: AffixContainerItemProps;
  rtOption2?: AffixContainerItemProps;
  lbOption?: AffixContainerItemProps;
  rbOption?: AffixContainerItemProps;
  centerOption?: AffixContainerItemProps;
  lcOption?: AffixContainerItemProps;
  rcOption?: AffixContainerItemProps;
  tcOption?: AffixContainerItemProps;
  bcOption?: AffixContainerItemProps;
  /** 自定义位置 */
  customOption?: AffixContainerItemProps;
  /** 是否禁用 */
  disabled?: boolean;
  onClick?: (e: any) => void;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};
const AffixContainer: React.FC<AffixContainerProps> = ({
  ltOption,
  rtOption,
  rtOption2,
  lbOption,
  rbOption,
  tcOption,
  bcOption,
  centerOption,
  lcOption,
  rcOption,
  customOption,
  disabled,
  onClick,
  children,
  className,
  style,
  ...restProps
}) => {
  const data = useMemo(
    () => [
      { option: ltOption, placement: 'lt' },
      { option: rtOption, placement: 'rt' },
      { option: rtOption2, placement: 'rt' },
      { option: lbOption, placement: 'lb' },
      { option: rbOption, placement: 'rb' },
      { option: lcOption, placement: 'lc' },
      { option: rcOption, placement: 'rc' },
      { option: tcOption, placement: 'tc' },
      { option: bcOption, placement: 'bc' },
      { option: centerOption, placement: 'center' },
      { option: customOption, placement: 'custom' },
    ],
    [ltOption, rtOption, lbOption, rbOption, lcOption, rcOption, tcOption, bcOption, centerOption, customOption],
  );
  const [show, setShow] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const getOpacity = (option: AffixContainerItemProps) => {
    if (option.hide) return 0;
    if (option.hoverShow) {
      return show ? 1 : 0;
    }
    if (option.hoverHide) {
      return hide ? 0 : 1;
    }
    return 1;
  };
  useEffect(() => {
    const wheel = (e: MouseEvent) => {
      setShow(false);
      setHide(false);
      e.stopPropagation();
    }
    document.body.addEventListener('wheel', wheel);
    return () => {
      document.body.removeEventListener('wheel', wheel);
    }
  }, []);

  const getLeft = (placement: string, gap: number, left?: number | string) => {
    const newGap = gap !== undefined ? gap : '8px';
    switch (placement) {
      case 'lt':
      case 'lb':
      case 'lc': return newGap; break;
      case 'rt':
      case 'rb':
      case 'rc': return 'auto'; break;
      case 'tc':
      case 'bc':
      case 'center': return '50%'; break;
      case 'custom': return left; break;
      default: return 'auto'; break;
    }
  };
  const getRight = (placement: string, gap: number) => {
    const newGap = gap !== undefined ? gap : '8px';
    switch (placement) {
      case 'lt':
      case 'lb':
      case 'lc':
      case 'tc':
      case 'bc':
      case 'center': return 'auto'; break;
      case 'rt':
      case 'rb':
      case 'rc': return newGap; break;
      default: return 'auto'; break;
    }
  };
  const getTop = (placement: string, gap: number, top?: number | string) => {
    const newGap = gap !== undefined ? gap : '8px';
    switch (placement) {
      case 'lt':
      case 'rt':
      case 'tc': return newGap; break;
      case 'lb':
      case 'rb':
      case 'bc': return 'auto'; break;
      case 'lc':
      case 'rc':
      case 'center': return '50%'; break;
      case 'custom': return top; break;
      default: return 'auto'; break;
    }
  };
  const getBottom = (placement: string, gap: number) => {
    const newGap = gap !== undefined ? gap : '8px';
    switch (placement) {
      case 'lt':
      case 'rt':
      case 'tc':
      case 'lc':
      case 'rc':
      case 'center': return 'auto'; break;
      case 'lb':
      case 'rb':
      case 'bc': return newGap; break;
      default: return 'auto'; break;
    }
  };
  const getTransform = (placement: string) => {
    switch (placement) {
      case 'lt':
      case 'rt':
      case 'lb':
      case 'rb': return ''; break;
      case 'tc':
      case 'bc': return 'translateX(-50%)'; break;
      case 'lc':
      case 'rc': return 'translateY(-50%)'; break;
      case 'center': return 'translate(-50%,-50%)'; break;
      default: return ''; break;
    }
  };
  return (
    <div
      className={`StyleAffixContainer relative flex items-center justify-center ${disabled ? 'events-none cursor-not-allow' : ''} ${className}`}
      style={style}
      onClick={e => onClick?.(e)}
      onMouseOver={() => {
        if (disabled) return;
        setShow(true);
        setHide(true);
      }}
      onMouseLeave={() => {
        setShow(false);
        setHide(false);
      }}
      onWheel={e => e.stopPropagation()}
      {...restProps}
    >
      {children}
      {data?.map((i, idx) =>
        i.option ? (
          <StyleAffixContainerItem
            key={idx}
            style={{
              left: getLeft(i.placement, i.option.gap, i.option.left || 0),
              right: getRight(i.placement, i.option.gap),
              top: getTop(i.placement, i.option.gap, i.option.top || 0),
              bottom: getBottom(i.placement, i.option.gap),
              borderRadius: typeof i.option.radius === 'number' ? `${i.option.radius}px` : i.option.radius,
              transform: getTransform(i.placement),
              opacity: getOpacity(i.option),
              zIndex: i.option.zIndex || 2,
              ...i.option.style,
            }}
            className={`${i.placement} absolute ${i.option.className ?? ''} ${i.option.squareSize ? 'square' : ''}`}
            onClick={(e: React.UIEvent) => {
              e.stopPropagation();
              i.option?.onClick?.(e);
            }}
            dark={i.option.dark}
            custom={i.option.custom}
            squareSize={i.option.squareSize}
          >
            {i.option?.content}
          </StyleAffixContainerItem>
        ) : null,
      )}
    </div>
  );
};

const StyleAffixContainerItem = styled.div<{
  hoverShow?: boolean;
  dark?: boolean;
  custom?: boolean;
  square?: boolean;
  squareSize?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  opacity: ${props => (props.hoverShow ? 0 : 1)};
  padding: ${props => (props.custom ? '' : '4px 8px')};
  border-radius: ${props => (props.custom ? '' : '6px')};
  font-family: inherit;
  font-size: 12px;
  background: ${props => (props.custom ? '' : props.dark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
  color: ${props => (props.custom ? '' : props.dark ? 'var(--color-text-white)' : 'var(--color-text-2)')};
  backdrop-filter: ${props => (props.custom ? '' : 'var(--ms-bg-blur-4)')};
  transition: opacity 0.2s linear;
  box-sizing: border-box;
  &.square{
    width: ${props => props.squareSize ? `${props.squareSize}px` : '24px'};
    height: ${props => props.squareSize ? `${props.squareSize}px` : '24px'};
  }
`;

export default AffixContainer;
