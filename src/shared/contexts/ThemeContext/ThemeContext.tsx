import React, { createContext, FC, useMemo, useState } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const enum EThemes {
    dark = 'dark',
    light = 'light'
}

interface ThemeContextProps {
    theme?: EThemes;
    setTheme?: (theme: EThemes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EThemes || EThemes.light;

interface ThemeProviderProps {
    initialTheme?: EThemes;
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState<EThemes>(initialTheme || defaultTheme);

    const defaultValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};
