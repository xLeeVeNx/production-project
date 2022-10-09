import { classNames } from 'shared/lib';
import { FC } from 'react';
import style from './Loader.module.scss';

export const Loader: FC = () => {
    return (
        <span className={classNames(style.loader)}></span>
    );
};
