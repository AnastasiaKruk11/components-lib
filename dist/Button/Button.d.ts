import React, { FC } from 'react';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: any;
    size: string;
    variant: string;
}
declare const Button: FC<ButtonProps>;
export default Button;
