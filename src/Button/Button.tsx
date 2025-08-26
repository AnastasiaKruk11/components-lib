import React, { FC } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?: React.ReactNode;
    size: string;
    variant: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, size, variant, onClick, ...props }) => {

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
        <button onClick={onClick} className={rootClasses.join(' ')} {...props} >
            {children}
        </button>
    );
};

export default Button;