import React, {FC} from "react";
import styles from './Checkbox.module.css';

export interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    disabled: boolean;
    checked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ( {label, disabled, checked, ...props} ) => {

    const labelClasses = [styles.checkboxLabel];

    if (disabled) {
        labelClasses.push(styles.checkboxLabelDisabled);
    }

    return (
        <label className={styles.checkboxWrapper}>
            <input type="checkbox" className={styles.checkbox} disabled={disabled} checked={checked} {...props}></input>
            <span className={labelClasses.join(' ')}>{label}</span>
        </label>
    );
};

export default Checkbox;