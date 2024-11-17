import { default as React } from 'react';
export type WatermarkProps = {
    /** 水印内容 */
    content?: React.ReactNode | string;
    /** 图片水印内容 */
    url?: string;
};
declare const Watermark: React.FC<WatermarkProps>;
export default Watermark;
