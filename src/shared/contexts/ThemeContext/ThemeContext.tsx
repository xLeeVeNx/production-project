import React, { createContext, FC, useMemo, useState } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const enum EThemes {
    dark = 'dark',
    default = ''
}

interface ThemeContextProps {
    theme?: EThemes;
    setTheme?: (theme: EThemes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EThemes || EThemes.default;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<EThemes>(initialTheme);

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
