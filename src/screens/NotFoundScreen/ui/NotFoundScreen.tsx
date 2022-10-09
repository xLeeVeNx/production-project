import { classNames } from 'shared/lib';
import { FC } from 'react';
import style from './NotFoundScreen.module.scss';
import { useTranslation } from 'react-i18next';

export const NotFoundScreen: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(style.notFoundScreen)}>
            {t('Страница не найдена')}
        </div>
    );
};
