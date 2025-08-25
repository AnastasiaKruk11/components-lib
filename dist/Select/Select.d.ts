import React, { FC } from "react";
export interface SelectOptions {
    key: number;
    value: string;
}
export interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    label: string;
    options: Array<SelectOptions>;
}
declare const Select: FC<SelectProps>;
export default Select;
