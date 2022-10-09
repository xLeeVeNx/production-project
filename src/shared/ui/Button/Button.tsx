import { classNames } from 'shared/lib';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import style from './Button.module.scss';

export const enum EButtonThemes {
    reset = 'reset',
    outline = 'outline'
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement> {
    theme?: EButtonThemes;
}

export const Button: FC<ButtonProps> = ({ children, className, theme, ...restProps }) => {
    return (
        <button
            {...restProps}
            className={classNames(style.button, {}, [className, style[theme]])}
        >
            {children}
        </button>
    );
};
