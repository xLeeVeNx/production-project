import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18nForTests';
import { render } from '@testing-library/react';

export const renderWithTranslation = (component: React.ReactNode) => {
    return render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    );
};
