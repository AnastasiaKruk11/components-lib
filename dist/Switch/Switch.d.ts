import { FC } from "react";
export interface SwitchProps {
    label: string;
    disabled: boolean;
    checked: boolean;
    onChange?: (value: string) => void;
}
declare const Switch: FC<SwitchProps>;
export default Switch;
