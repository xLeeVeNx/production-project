import { classNames } from 'shared/lib';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import style from './Button.module.scss';

export const enum EButtonThemes {
    reset = 'reset',
    resetInverted = 'resetInverted',
    outline = 'outline',
    outlineInverted = 'outlineInverted',
    background = 'background',
    backgroundInverted = 'backgroundInverted'
}

export const enum EButtonSizes {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL'
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement> {
    theme?: EButtonThemes;
    square?: boolean;
    size?: EButtonSizes;
}

export const Button: FC<ButtonProps> = ({ children, className, theme, square, size, ...restProps }) => {
    return (
        <button
            {...restProps}
            className={classNames(style.button, { [style.square]: square }, [className, style[theme], style[size]])}
        >
            {children}
        </button>
    );
};
