import { classNames } from 'shared/lib';
import { FC } from 'react';
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div className={style.links}></div>
        </div>
    );
};
