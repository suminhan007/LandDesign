import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import Pop, { PopProps } from './Pop';

export type LinkProps = {
  href?: string;
  target?: string;
  /* 标识链接类型 */
  status?: "default" | "primary" | "success" | "danger" | "warning";
  disabled?: boolean;
  active?: boolean;
  tip?: React.ReactNode | string;
  tipProps?: PopProps;
  children?: React.ReactNode | string;
  onClick?: (e: any) => void;
  style?: CSSProperties;
  className?: string;
};

const Link: React.FC<LinkProps> = ({
  href,
  target = "_blank",
  status = "default",
  disabled,
  active,
  tip,
  tipProps,
  children,
  onClick,
  style,
  className = "",
}) => {
  const getColor = () => {
    switch (status) {
      case "default":
        return "var(--color-link-";
      case "primary":
        return "var(--color-primary-";
      case "success":
        return "var(--color-green-";
      case "danger":
        return "var(--color-red-";
      case "warning":
        return "var(--color-orange-";
      default:
        return "var(--color-link-";
    }
  };
  return (
    <StyledLink
      href={href}
      target={target}
      className={`land-link ${active ? "active" : ""} ${
        disabled ? "disabled hover-pop" : ""
      } ${className}`}
      style={style}
      color={getColor()}
      onClick={onClick}
    >
      {children}
      {tip && <Pop content={tip} {...tipProps} />}
    </StyledLink>
  );
};

const StyledLink = styled.a<{
  color?: string;
}>`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: ${props => `${props.color}6)`};
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${props => `${props.color}6)`};
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: ${props => `${props.color}7)`};
        &::before {
            opacity: 1;
            background-color: ${props => `${props.color}7)`};
        }
    }
    &:active,
    &.active {
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

export default Link