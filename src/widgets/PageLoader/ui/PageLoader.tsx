import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';
import { FC } from 'react';
import style from './PageLoader.module.scss';

export const PageLoader: FC = () => {
    return (
        <div className={classNames(style.pageLoader)}>
            <Loader />
        </div>
    );
};
