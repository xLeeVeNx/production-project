import { classNames } from 'shared';
import { FC } from 'react';
import style from './Navbar.module.scss';
import { AppLink } from 'shared/ui';
import { EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('');

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink className={style.link} theme={EAppLinkTheme.secondary} to="/">{t('Главная')}</AppLink>
                <AppLink className={style.link} theme={EAppLinkTheme.secondary} to="/about">{t('О нас')}</AppLink>
            </div>
        </div>
    );
};
