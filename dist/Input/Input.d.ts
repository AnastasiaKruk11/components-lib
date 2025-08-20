import { FC } from "react";
export interface InputProps {
    error: boolean;
    placeholder: string;
    label: string;
}
declare const Input: FC<InputProps>;
export default Input;
