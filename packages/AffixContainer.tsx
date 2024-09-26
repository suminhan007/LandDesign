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
  /** 使用默认背景 */
  useBg?: boolean;
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
  // tcOption?: AffixContainerItemProps;
  // bcOption?: AffixContainerItemProps;
  bOption?: AffixContainerItemProps;
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
  bOption,
  centerOption,
  lcOption,
  rcOption,
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
      { option: bOption, placement: 'b' },
      { option: lcOption, placement: 'lc' },
      { option: rcOption, placement: 'rc' },
    ],
    [ltOption, rtOption, lbOption, rbOption, bOption],
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
            onMouseOver={e => { if (i.placement === 'b') e.stopPropagation() }}
            key={idx}
            style={{
              left:
                i.placement === 'lt' || i.placement === 'lb' || i.placement === 'b' || i.placement === 'lc'
                  ? i.option.gap === undefined
                    ? 4
                    : i.option.gap
                  : 'auto',
              right:
                i.placement === 'rt' || i.placement === 'rb' || i.placement === 'b' || i.placement === 'rc'
                  ? i.option.gap === undefined
                    ? 4
                    : i.option.gap
                  : 'auto',
              top:
                i.placement === 'lt' || i.placement === 'rt' ? (i.option.gap === undefined ? 4 : i.option.gap) : (i.placement === 'lc' || i.placement === 'rc') ? '50%' : 'auto',
              bottom:
                i.placement === 'lb' || i.placement === 'rb' || i.placement === 'b'
                  ? i.option.gap === undefined
                    ? 4
                    : i.option.gap
                  : 'auto',
              borderRadius: typeof i.option.radius === 'number' ? `${i.option.radius}px` : i.option.radius,
              // opacity: (!i.option.hoverShow || show) ? 1 : 0,
              transform: (i.placement === 'lc' || i.placement === 'rc') ? 'translateY(-50%)' : '',
              opacity: getOpacity(i.option),
              zIndex: i.option.zIndex || 2,
              ...i.option.style,
            }}
            className={`${i.placement} absolute ${i.option.className ?? ''}`}
            onClick={(e: React.UIEvent) => {
              e.stopPropagation();
              i.option?.onClick?.(e);
            }}
            dark={i.option.dark}
            useBg={i.option.useBg}
          >
            {i.option?.content}
          </StyleAffixContainerItem>
        ) : null,
      )}
      {centerOption && (
        <StyleAffixContainerItem
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            borderRadius: `${centerOption.radius}px`,
            opacity: getOpacity(centerOption),
            zIndex: centerOption.zIndex || 2,
            ...centerOption.style,
          }}
          className={`absolute ${centerOption.className ?? ''}`}
          onClick={(e: React.UIEvent) => {
            e.stopPropagation();
            centerOption.onClick?.(e);
          }}
          dark={centerOption.dark}
          useBg={centerOption.useBg}
        >
          {centerOption?.content}
        </StyleAffixContainerItem>
      )}
    </div>
  );
};

const StyleAffixContainerItem = styled.div<{
  hoverShow?: boolean;
  dark?: boolean;
  useBg?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  opacity: ${props => (props.hoverShow ? 0 : 1)};
  padding: ${props => (!props.useBg ? '0px' : '2px 8px')};
  border-radius: ${props => (!props.useBg ? '0px' : '6px')};
  font-family: inherit;
  font-size: 12px;
  background: ${props => (!props.useBg ? '' : props.dark ? 'rgba(51, 55, 61, 0.58)' : 'rgba(255, 255, 255, 0.8)')};
  color: ${props => (props.dark ? 'var(--od-light-color)' : 'rgba(51, 55, 61, 0.58)')};
  backdrop-filter: ${props => (!props.useBg ? '' : 'var(--ms-bg-blur-4)')};
  transition: opacity 0.2s linear;
  box-sizing: border-box;
`;

export default AffixContainer;
