import React, { FC } from 'react';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactNode;
    size: string;
    variant: string;
    onClick?: () => void;
}
declare const Button: FC<ButtonProps>;
export default Button;
