import { default as React, CSSProperties } from 'react';
export type MessageProps = {
    show?: boolean;
    type?: "success" | "fail" | "warn" | "default";
    text?: string | React.ReactNode;
    style?: CSSProperties;
    className?: string;
};
declare const Message: React.FC<MessageProps>;
export default Message;
