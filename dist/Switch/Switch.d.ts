import React, { FC } from "react";
export interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    disabled: boolean;
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Switch: FC<SwitchProps>;
export default Switch;
