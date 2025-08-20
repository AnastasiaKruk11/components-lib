import React, {FC} from "react";
import * as styles from './Select.module.css';

export interface SelectOptions {
    key: number;
    value: string;
}

export interface SelectProps {
    label: string;
    options: Array<SelectOptions>;
}

const Select: FC<SelectProps> = ( {label, options} ) => {

    return (
        <div className={styles.selectWrapper}>
            <label className={styles.selectLabel} htmlFor="select">{label}</label>
            <select className={styles.select} id="select">
                {options.map(item => (
                    <option className={styles.option} key={item.key}>{item.value}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;