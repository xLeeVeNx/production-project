import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export const MainScreen = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = React.useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input placeholder={t('Логин')} type="text" value={value} onChange={onChange}/>
        </div>
    );
};
