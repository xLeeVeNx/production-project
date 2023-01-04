import { classNames } from 'shared/lib';
import { FC, useCallback, useState } from 'react';
import style from './Navbar.module.scss';
import { Button, Modal } from 'shared/ui';
import { t } from 'i18next';
import { EButtonThemes } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const toggleAuthModal = useCallback(() => {
        setIsAuthModalOpen(!isAuthModalOpen);
    }, [isAuthModalOpen]);

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <Button theme={EButtonThemes.outlineInverted} onClick={toggleAuthModal}>{t('Войти')}</Button>
            <Modal isOpened={isAuthModalOpen} onClose={toggleAuthModal}>
                <input placeholder={t('Войти')} type="text"/>
            </Modal>
        </div>
    );
};
