import React, { CSSProperties } from "react";
export type UploaderProps = {
    /**上传文件描述 */
    desc?: string;
    /**文件类型 */
    fileType?: string;
    /**上传事件 */
    onUpload?: (url: any, file: string) => void;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    style?: CSSProperties;
    className?: string;
    innerClassName?: string;
};
declare const Uploader: React.FC<UploaderProps>;
export default Uploader;
