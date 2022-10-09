import { classNames } from 'shared/lib';
import { FC } from 'react';
import style from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export const enum EAppLinkTheme {
    primary = 'primary',
    secondary = 'secondary'
}

interface AppLinkProps extends LinkProps {
    theme?: EAppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({ children, to, className, theme = EAppLinkTheme.primary, ...restProps }) => {
    return (
        <Link
            {...restProps}
            to={to}
            className={classNames(style.appLink, {}, [className, style[theme]])}
        >
            {children}
        </Link>
    );
};
