import React, {FC} from "react";
import * as styles from './Switch.module.css';

export interface SwitchProps {
    label: string;
    disabled: boolean;
    checked: boolean;
    onChange?: (value: string) => void;
}

const Switch: FC<SwitchProps> = ( {label, disabled, checked, onChange, ...props} ) => {

    const labelClasses = [styles.switchLabel];

    if (disabled) {
        labelClasses.push(styles.switchLabelDisabled);
    }

    const resolveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.checkboxWrapper}>
                <input 
                    type="checkbox"
                    className={styles.checkbox} 
                    disabled={disabled} 
                    checked={checked}
                    onChange={resolveChange}
                    {...props}>
                </input>
                <span className={styles.checkboxSwitch}></span>
            </div>
            <label className={labelClasses.join(' ')}>{label}</label>
        </div>
    );
};

export default Switch;