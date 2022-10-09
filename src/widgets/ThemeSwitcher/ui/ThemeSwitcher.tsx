import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';
import { FC } from 'react';
import { useTheme } from 'shared/contexts';
import DefaultIcon from 'shared/assets/images/icons/theme-default.svg';
import DarkIcon from 'shared/assets/images/icons/theme-dark.svg';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';
import { EButtonThemes } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={EButtonThemes.reset}
            onClick={toggleTheme}
        >
            {
                theme === EThemes.default ? <DefaultIcon /> : <DarkIcon />
            }
        </Button>
    );
};
