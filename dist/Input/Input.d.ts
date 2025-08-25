import React, { FC } from "react";
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: boolean;
    placeholder: string;
    label: string;
}
declare const Input: FC<InputProps>;
export default Input;
