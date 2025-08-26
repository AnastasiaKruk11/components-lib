import React, {FC} from "react";
import styles from './Select.module.css';

export interface SelectOptions {
    key: number;
    value: string;
}

export interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    label: string;
    options: Array<SelectOptions>;
}

const Select: FC<SelectProps> = ( {label, options, ...props} ) => {

    return (
        <div className={styles.selectWrapper}>
            <label className={styles.selectLabel} htmlFor="select">{label}</label>
            <select className={styles.select} {...props} id="select">
                {options.map(item => (
                    <option className={styles.option} key={item.key}>{item.value}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;