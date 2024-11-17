import { default as React, CSSProperties } from 'react';
export type PaginationProps = {
    /** 当前页 */
    current?: number;
    /** 总页数 */
    total?: number;
    /** 每次加载的页数 */
    pageSize?: 1 | 5 | 10 | 15 | 20;
    /** 是否显示总页数 */
    showTotal?: boolean;
    /** 是否显示输入框 */
    showInput?: boolean;
    onChange?: (current: number) => void;
    style?: CSSProperties;
    className?: string;
};
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
