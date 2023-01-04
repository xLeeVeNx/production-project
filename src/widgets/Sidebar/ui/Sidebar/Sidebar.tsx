import { classNames } from 'shared/lib';
import { FC, useState } from 'react';
import style from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, Button } from 'shared/ui';
import { EButtonSizes, EButtonThemes } from 'shared/ui/Button/Button';
import { EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import { RoutesPaths } from 'app/config/routesConfig/routesConfig';
import MainIcon from 'shared/assets/images/icons/main.svg';
import AboutIcon from 'shared/assets/images/icons/about.svg';

export const Sidebar: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = () => setCollapsed(!collapsed);

    return (
        <aside className={classNames(style.sidebar, { [style.collapsed]: collapsed })} data-testid="sidebar">
            <div className={style.links}>
                <AppLink
                    className={style.link}
                    theme={EAppLinkTheme.secondary}
                    to={RoutesPaths.main}
                >
                    <MainIcon className={style.icon} />
                    <span className={style.text}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    className={style.link}
                    theme={EAppLinkTheme.secondary}
                    to={RoutesPaths.about}
                >
                    <AboutIcon className={style.icon} />

                    <span className={style.text}>{t('О нас')}</span>
                </AppLink>
            </div>
            <div className={classNames(style.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher className={style.switcher} short={collapsed}/>
            </div>
            <Button
                className={classNames(style.toggleButton)}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={EButtonThemes.backgroundInverted}
                square={true}
                size={EButtonSizes.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
        </aside>
    );
};
