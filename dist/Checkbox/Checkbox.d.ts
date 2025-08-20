import { FC } from "react";
export interface CheckboxProps {
    label: string;
    disabled: boolean;
    checked: boolean;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
