import { Story } from '@storybook/react';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export const ThemeDecorator = (theme: EThemes) => (StoryComponent: Story) => {
    document.body.classList.remove(EThemes.light, EThemes.dark);
    document.body.classList.add(theme);

    return (
        <StoryComponent/>
    );
};
