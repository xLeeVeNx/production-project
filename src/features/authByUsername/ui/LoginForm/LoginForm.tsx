import { classNames } from 'shared/lib';
import { FC } from 'react';
import style from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(style.form)}>
            <Input className={style.input} placeholder={t('Почта')} type="email" autoFocus/>
            <Input className={style.input} placeholder={t('Пароль')} type="password"/>
            <Button className={style.button}>{t('Войти')}</Button>
        </form>
    );
};
