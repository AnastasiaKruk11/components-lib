import React, { FC } from "react";
export interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    disabled: boolean;
    checked?: boolean;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
