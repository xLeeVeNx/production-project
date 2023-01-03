import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

interface ComponentRenderProps {
    route?: string;
}

export const componentRender = (component: React.ReactNode, options: ComponentRenderProps = {}) => {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    );
};
