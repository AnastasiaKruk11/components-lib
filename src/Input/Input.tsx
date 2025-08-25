import React, {FC} from "react";
import styles from './Input.module.css';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: boolean;
    placeholder: string;
    label: string;
}

const Input: FC<InputProps> = ( {error, placeholder, label, ...props} ) => {

    const inputClasses = [styles.input];
    const labelClasses = [styles.inputLabel];

    if (error) {
        inputClasses.push(styles.errorInput);
        labelClasses.push(styles.errorLabel);
    }

    return (
        <div className={styles.inputWrapper}>
            <label className={labelClasses.join(' ')} htmlFor="input">
                {label}
            </label>
            <input type="text" id="input" aria-label="Text" className={inputClasses.join(' ')} placeholder={placeholder} {...props}></input>
        </div>
    );
};

export default Input;