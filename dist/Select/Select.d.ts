import { FC } from "react";
export interface SelectOptions {
    key: number;
    value: string;
}
export interface SelectProps {
    label: string;
    options: Array<SelectOptions>;
}
declare const Select: FC<SelectProps>;
export default Select;
