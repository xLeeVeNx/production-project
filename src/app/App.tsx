import { classNames } from 'shared/lib';
import { useTheme } from 'shared/contexts';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export const App = () => {
    const { theme } = useTheme();

    document.body.classList.remove(EThemes.dark, EThemes.light);
    document.body.classList.add(theme);

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar/>
                <div className="appContent">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};
