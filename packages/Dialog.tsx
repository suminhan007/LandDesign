import React, { CSSProperties, ReactNode, useMemo } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Divider from "./Divider";
import Button from "./Button";

type DialogProps = {
  /** 是否显示弹窗 */
  show?: boolean;
  /** 是否需要背景遮罩 */
  mask?: boolean;
  /** 弹窗标题 */
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

  /** 弹窗大小 */
  size?: 'small' | 'medium' | 'large';

  /** 关闭弹窗事件 */
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
const Dialog: React.FC<DialogProps> = ({
  show,
  mask,
  title,
  headerLeftComponent,
  headerRightComponent,
  headerComponent,
  useHeaderDivider,
  footerLeftComponent,
  footerRightComponent,
  footerComponent,
  useFooterDivider,
  cancelLabel = '取消',
  submitLabel = '确定',
  size = 'medium',
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
    switch (size) {
      case 'small': width = '320px'; break;
      case 'medium': width = '600px'; break;
      case 'large': width = '1000px'; break;
      default: break;
    }
    return width;
  }, [size]);

  return <StyledLandDialog className={`land-dialog ${show ? 'show' : ''} ${wrapClassName}`} contentWidth={contentWidth} style={wrapStyle}>
    {mask && <div className="land-dialog-mask" style={maskStyle}></div>}
    <div className={`land-dialog-content ${contentClassName}`} style={contentStyle}>
      {headerComponent || ((title || onClose || headerLeftComponent || headerRightComponent) ? <div className="land-dialog-header">
        {headerLeftComponent || <div className="land-dialog-header-title">{title}</div>}
        {headerRightComponent || (onClose && <div className="land-dialog-header-close"><Icon name="close" onClick={onClose} /></div>)}
      </div> : null)}
      {useHeaderDivider && <Divider />}

      <div className={`land-dialog-body ${bodyClassName}`} style={bodyStyle}>{children}</div>

      {useFooterDivider && <Divider />}
      {footerComponent || <div className="land-dialog-footer">
        {footerRightComponent || ((cancelLabel || submitLabel || onCancel || onSubmit) && <div className="land-dialog-footer-btn">
          {onCancel && <Button type="background" status="default" onClick={onCancel}>{cancelLabel}</Button>}
          {onSubmit && <Button type="background" status="primary" onClick={onSubmit}>{submitLabel}</Button>}
        </div>)}
        {footerLeftComponent}
      </div>}
    </div>
  </StyledLandDialog>;
};

const StyledLandDialog = styled.div<{
  contentWidth?: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .land-dialog-content{
    opacity: 0;
    transform: scale(0.9); 
  }
  .land-dialog-mask{
    opacity: 0;
  }
  pointer-events: none;
  z-index: 1000;
  &.show{
    .land-dialog-content{
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
      transition: opacity var(--transition-15) linear, transform var(--transition-15) linear;
    }
    .land-dialog-mask{
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
  }
  .land-dialog-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .land-dialog-content{
    position: relative;
    width: ${props => props.contentWidth};
    background-color: var(--color-bg-white);
    box-shadow: var(--boxshadow-medium);
    border-radius: 6px;
    .land-dialog-header{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
      height: 64px;
      .land-dialog-header-title{
        font-size: 16px;
        font-weight: 500;
        color: var(--color-text-2);
      }
      .land-dialog-header-close{
        position: absolute;
        top: 0px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 100%;
        color: var(--color-text-2);
        transition: color var(--transition-15) linear;
        cursor: pointer;
        &:hover{
          color: var(--color-text-1);
        }
      }
    }
    .land-dialog-body{
      padding: 20px 24px;
    }
    .land-dialog-footer{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px 24px;
      .land-dialog-footer-btn{
        display: flex;
        gap: 8px;
      }
    }
  }
`;
export default Dialog;

