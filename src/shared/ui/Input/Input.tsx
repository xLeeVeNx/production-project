import { classNames } from 'shared/lib';
import React, { DetailedHTMLProps, FC, InputHTMLAttributes, useEffect } from 'react';
import style from './Input.module.scss';

type HTMLInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = ({ className, value, onChange, type = 'text', placeholder, autoFocus, ...restProps }) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [caretPosition, setCaretPosition] = React.useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: React.SyntheticEvent) => {
        setCaretPosition((e.target as HTMLInputElement).selectionStart || 0);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    return (
        <div className={style.inputWrapper}>
            {placeholder && <div className={style.placeholder}>{`${placeholder} >`}</div>}
            <div className={style.box}>
                <input className={classNames(style.input, {}, [className])} ref={inputRef} type={type} value={value}
                    onChange={onChangeHandler} onFocus={onFocus} onBlur={onBlur} onSelect={onSelect} {...restProps} />
                {isFocused && <span className={style.caret} style={{ left: `${caretPosition * 8.8}px` }}></span>}
            </div>
        </div>
    );
};
