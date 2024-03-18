import React, { CSSProperties } from "react";
import styled from "styled-components";

export type DropdownProps = {
  children?: React.ReactNode | string;
  style?: CSSProperties;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ children, style, className }) => {
  return <StyledDropdown className={className} style={style}>{children}</StyledDropdown>;
};

const StyledDropdown = styled.a<{

}>`
`;

export default Dropdown;
