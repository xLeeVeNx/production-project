import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutScreen = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};
