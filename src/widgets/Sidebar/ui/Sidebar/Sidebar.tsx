import { classNames } from 'shared/lib';
import { FC, useState } from 'react';
import style from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

export const Sidebar: FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <aside className={classNames(style.sidebar, { [style.collapsed]: collapsed })} data-testid="sidebar">
            <div className={classNames(style.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher className={style.switcher} />
            </div>
            <button data-testid="sidebar-toggle" onClick={onToggle}>toggle</button>
        </aside>
    );
};