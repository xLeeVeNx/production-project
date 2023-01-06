import { classNames } from 'shared/lib';
import { FC, useCallback, useState } from 'react';
import style from './Navbar.module.scss';
import { Button } from 'shared/ui';
import { EButtonThemes } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/authByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();

    const toggleAuthModal = useCallback(() => {
        setIsAuthModalOpen(!isAuthModalOpen);
    }, [isAuthModalOpen]);

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button theme={EButtonThemes.outlineInverted} onClick={toggleAuthModal}>{t('Войти')}</Button>
            <LoginModal isOpened={isAuthModalOpen} onClose={toggleAuthModal}>
                <input placeholder={t('Войти')} type="text"/>
            </LoginModal>
        </div>
    );
};
