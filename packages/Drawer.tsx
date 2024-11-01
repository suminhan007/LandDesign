import React, { CSSProperties, ReactNode, useMemo } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Divider from "./Divider";
import Button from "./Button";

type DrawerProps = {
  /** 是否显示侧拉窗 */
  show?: boolean;
  /** 侧拉窗位置 */
  placement?: 'right' | 'bottom';
  /** 是否需要背景遮罩 */
  mask?: boolean;
  /** 侧拉窗标题 */
  title?: string | ReactNode;
  /** 自定义头部左侧 */
  headerLeftComponent?: ReactNode;
  /** 自定义头部右侧 */
  headerRightComponent?: ReactNode;
  /** 自定义头部 */
  headerComponent?: ReactNode;
  /** 是否隐藏头部分割线 */
  useHeaderDivider?: boolean;
  /** 自定义尾部左侧 */
  footerLeftComponent?: ReactNode;
  /** 自定义尾部右侧 */
  footerRightComponent?: ReactNode;
  /** 自定义尾部 */
  footerComponent?: ReactNode;
  /** 是否隐藏尾部分割线 */
  useFooterDivider?: boolean;
  /** 取消按钮文案 */
  cancelLabel?: string | ReactNode;
  /** 确定按钮文案 */
  submitLabel?: string | ReactNode;

  /** 侧拉窗最小宽度 */
  minWidth?: string;
  /** 侧拉窗最大宽度 */
  maxWidth?: string;
  /** 侧拉窗大小 */
  size?: 'small' | 'medium' | 'large' | 'auto';

  /** 关闭侧拉窗事件 */
  onClose?: () => void;
  /** 取消事件 */
  onCancel?: () => void;
  /** 确定事件 */
  onSubmit?: () => void;

  children?: ReactNode;

  /** 外层样式 */
  wrapStyle?: CSSProperties;
  wrapClassName?: string;
  /** 内层样式 */
  contentStyle?: CSSProperties;
  contentClassName?: string;
  /** body层样式 */
  bodyStyle?: CSSProperties;
  bodyClassName?: string;
  /** 遮罩样式 */
  maskStyle?: CSSProperties;
};
const Drawer: React.FC<DrawerProps> = ({
  show,
  placement = 'right',
  mask,
  title,
  headerLeftComponent,
  headerRightComponent,
  headerComponent,
  useHeaderDivider = true,
  footerLeftComponent,
  footerRightComponent,
  footerComponent,
  useFooterDivider = true,
  cancelLabel = '取消',
  submitLabel = '确定',
  minWidth,
  maxWidth,
  size = 'auto',
  onClose,
  onSubmit,
  onCancel,
  children,
  wrapStyle,
  wrapClassName,
  contentStyle,
  contentClassName,
  bodyStyle,
  bodyClassName,
  maskStyle,
}) => {
  const contentWidth = useMemo(() => {
    let width = '320px';
    if (placement === 'bottom') {
      width = '100%'
    } else {
      switch (size) {
        case 'small': width = '32%'; break;
        case 'medium': width = '60%'; break;
        case 'large': width = '80%'; break;
        case 'auto': width = 'fit-content'; break;
        default:
          break;
      }
    }
    return width;
  }, [size, placement]);

  const contentHeight = useMemo(() => {
    let height = '100%';
    if (placement === 'bottom') {
      switch (size) {
        case 'small': height = '30%'; break;
        case 'medium': height = '60%'; break;
        case 'large': height = '90%'; break;
        case 'auto': height = 'fit-content'; break;
        default:
          break;
      }
    };
    return height;
  }, [placement]);

  const showCloseDIvider = useMemo(() => (onClose && (title || headerComponent || headerLeftComponent)), [onClose, headerComponent, headerLeftComponent]);

  return <StyledLandDrawer className={`land-drawer ${show ? 'show' : ''} ${placement} ${wrapClassName}`} contentWidth={contentWidth} contentHeight={contentHeight} minWidth={minWidth} maxWidth={maxWidth} style={wrapStyle}>
    {mask && <div className="land-drawer-mask" style={maskStyle}></div>}
    <div className={`land-drawer-content ${contentClassName}`} style={contentStyle}>
      <div className="land-drawer-header-wrapper">
        {onClose && <div className="land-drawer-header-close"><Icon name="close" onClick={onClose} size={24} /></div>}
        {showCloseDIvider && <Divider direction="column" lang="36px" margin={12} />}
        {headerComponent || ((title || onClose || headerLeftComponent || headerRightComponent) ? <div className="land-drawer-header">
          {headerLeftComponent || <div className="land-drawer-header-title">{title}</div>}
          {headerRightComponent && <div className="land-drawer-header-right">{headerRightComponent}</div>}
        </div> : null)}
      </div>
      {useHeaderDivider && <Divider />}

      <div className={`land-drawer-body ${bodyClassName}`} style={bodyStyle}>{children}</div>

      {useFooterDivider && <Divider />}
      {footerComponent || <div className="land-drawer-footer">
        {footerRightComponent || ((cancelLabel || submitLabel || onCancel || onSubmit) && <div className="land-drawer-footer-btn">
          {onCancel && <Button type="background" status="default" onClick={onCancel}>{cancelLabel}</Button>}
          {onSubmit && <Button type="background" status="primary" onClick={onSubmit}>{submitLabel}</Button>}
        </div>)}
        {footerLeftComponent}
      </div>}
    </div>
  </StyledLandDrawer>;
};

const StyledLandDrawer = styled.div<{
  contentWidth?: string;
  contentHeight?: string;
  minWidth?: string;
  maxWidth?: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: auto;
  z-index: 1000;
  .land-drawer-mask{
    opacity: 0;
  }
  .land-drawer-content{
    opacity: 0;
  }
  &.show{
    pointer-events: auto;
    .land-drawer-mask{
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    &.left .land-drawer-content,
    &.right .land-drawer-content,
    &.bottom .land-drawer-content{
        opacity: 1;
        transform: translate(0,0);
        transition: opacity var(--transition-15) linear, transform var(--transition-15) linear;
      }
  }
  &.right{
    .land-drawer-content{
      transform: translateX(10%); 
      border-radius: 6px 0 0 6px;
    }
  }
  &.bottom{
    .land-drawer-content{
      transform: translateY(10%); 
      border-radius: 6px 6px 0 0;
      max-width: unset;
      min-width: unset;
    }
  }
  .land-drawer-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .land-drawer-content{
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${props => props.contentWidth};
    height: ${props => props.contentHeight};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};
    background-color: var(--color-bg-white);
    box-shadow: var(--boxshadow-medium);
    .land-drawer-header-wrapper{
      display: flex;
      align-items: center;
      padding: 0 24px;
      height: 64px;
    }
    .land-drawer-header-close{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -4px;
        width: 32px;
        height: 100%;
        color: var(--color-text-2);
        transition: color var(--transition-15) linear;
        flex-shrink: 0;
        cursor: pointer;
        &:hover{
          color: var(--color-text-1);
        }
      }
    .land-drawer-header{
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      .land-drawer-header-title{
        font-size: 16px;
        font-weight: 500;
        color: var(--color-text-2);
      }
      .land-drawer-header-right{
        margin-left: auto;
      }
    }
    .land-drawer-body{
      padding: 20px 24px;
      flex: 1;
    }
    .land-drawer-footer{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      .land-drawer-footer-btn{
        display: flex;
        gap: 8px;
      }
    }
  }
`;
export default Drawer;

