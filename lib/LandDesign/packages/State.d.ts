import { default as React } from 'react';
export type StateProps = {
    type?: "empty" | "offline";
    title: React.ReactNode | string;
    subTitle?: React.ReactNode | string;
    titleLink?: string;
    subTitleLink?: string;
    button?: string;
    onTiTleLinkClick?: (e: any) => void;
    onSubTitleLinkClick?: (e: any) => void;
};
declare const State: React.FC<StateProps>;
export default State;
