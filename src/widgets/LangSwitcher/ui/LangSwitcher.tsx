import { classNames } from 'shared';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { EButtonThemes } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const onChangeLanguage = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={EButtonThemes.reset}
            onClick={onChangeLanguage}
        >
            {t('Язык')}
        </Button>

    );
};
