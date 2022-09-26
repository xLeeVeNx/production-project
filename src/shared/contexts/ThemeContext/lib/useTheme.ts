import { EThemes, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
    theme: EThemes;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === EThemes.dark ? EThemes.default : EThemes.dark;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
};
