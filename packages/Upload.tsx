import React, { CSSProperties } from "react";
import styled from "styled-components";

export type UploadProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Upload: React.FC<UploadProps> = ({ children, style, className }) => {
  return <StyledUpload className={className} style={style}>{children}</StyledUpload>;
};

const StyledUpload = styled.a<{

}>`
`;

export default Upload;
