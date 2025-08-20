import React, { FC } from 'react';
import * as styles from './Button.module.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?: any;
    size: string;
    variant: string;
}

const Button: FC<ButtonProps> = ({ children, size, variant, ...props }) => {

    const rootClasses = [styles.button];

    switch(size) {
        case 'small':
            rootClasses.push(styles.smallBtn);
            break;
        case 'medium':
            rootClasses.push(styles.mediumBtn);
            break;
        case 'large':
            rootClasses.push(styles.largeBtn);
            break;
    };

    switch(variant) {
        case 'text':
            rootClasses.push(styles.textBtn);
            break;
        case 'outlined':
            rootClasses.push(styles.outlinedBtn);
            break;
        case 'contained':
            rootClasses.push(styles.containedBtn);
            break;
    };

    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};

export default Button;