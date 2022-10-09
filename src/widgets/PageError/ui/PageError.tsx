import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';
import { FC } from 'react';
import style from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { EButtonThemes } from 'shared/ui/Button/Button';

export const PageError: FC = () => {
    const { t } = useTranslation();

    const reloadPage = () => window.location.reload();

    return (
        <div className={classNames(style.pageError)}>
            <h2 className={classNames(style.title)}>{t('Произошла непредвиденная ошибка')}</h2>
            <Button className={classNames(style.button)} onClick={reloadPage} theme={EButtonThemes.reset}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
