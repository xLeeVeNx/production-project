import React from 'react';
import { useTranslation } from 'react-i18next';

export const MainScreen = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};
