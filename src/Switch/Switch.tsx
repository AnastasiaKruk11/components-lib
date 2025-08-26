import React, {FC, useEffect, useState} from "react";
import styles from './Switch.module.css';

export interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    disabled: boolean;
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch: FC<SwitchProps> = ( {label, disabled, checked, onChange, ...props} ) => {

    const labelClasses = [styles.switchLabel];

    if (disabled) {
        labelClasses.push(styles.switchLabelDisabled);
    }
    
    const [inputValue, setInputValue] = useState(checked);

    const resolveChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
        onChange(event);
    };

    useEffect(() => {
        setInputValue(checked);
    }, [checked]);

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.checkboxWrapper}>
                <input 
                    type="checkbox"
                    className={styles.checkbox} 
                    disabled={disabled} 
                    checked={inputValue}
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