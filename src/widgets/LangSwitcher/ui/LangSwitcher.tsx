import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { EButtonThemes } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
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
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>

    );
};
