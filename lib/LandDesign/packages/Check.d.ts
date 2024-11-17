import { default as React } from 'react';
export type CheckProps = {
    checked?: boolean;
    text?: string;
    pop?: string;
    onChange?: () => void;
};
declare const Check: React.FC<CheckProps>;
export default Check;
