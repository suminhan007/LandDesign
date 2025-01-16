import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

export type MessageProps = {
  show?: boolean;
  type?: "success" | "fail" | "warn" | "default";
  text?: string | React.ReactNode;
  style?: CSSProperties;
  className?: string;
};
const Message: React.FC<MessageProps> = ({
  show = false,
  type = "default",
  text = "咕噜咕噜～",
  style,
  className = "",
}) => {
  const [newShow, setNewShow] = useState<boolean>(false);
  useEffect(() => {
    setNewShow(show);
  }, [show]);
  useEffect(() => {
    setNewShow(true);
    const timer = setTimeout(() => {
      setNewShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [show]);
  const toastType = useMemo(() => {
    switch (type) {
      case "default":
        return { color: "white", background: "black", icon: null }; break;
      case 'success': return { color: 'white', background: 'var(--color-green-6)' }; break;
      case 'fail': return { color: 'white', background: 'var(--color-red-6)' }; break;
      case 'warn': return { color: 'white', background: 'var(--color-orange-6)' }; break;
    }
  }, [type]);
  return (
    <StyleToastContainer
      className={`StyleToastContainer ${newShow ? "show" : "close"
        } ${className}`}
      style={{
        color: toastType?.color,
        backgroundColor: toastType?.background,
        ...style,
      }}
    >
      {text}
    </StyleToastContainer>
  );
};

const StyleToastContainer = styled.div`
  position: fixed;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 14px;
  z-index: var(--zIndex-5);
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-2) linear, top var(--transition-2) linear;
  &.show {
    top: 24px;
    opacity: 1;
  }
  &.close {
    top: 32px;
    opacity: 0;
  }
`;
export default Message;
