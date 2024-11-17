import { default as React, CSSProperties } from 'react';
export type CollapseProps = {
    data?: {
        title: string;
        details?: string | React.ReactNode;
        open?: boolean;
    }[];
    hideIcon?: boolean;
    style?: CSSProperties;
    className?: string;
};
declare const Collapse: React.FC<CollapseProps>;
export default Collapse;
