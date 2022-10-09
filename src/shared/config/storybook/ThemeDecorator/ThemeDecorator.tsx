import { Story } from '@storybook/react';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';
import { classNames } from 'shared/lib';

export const ThemeDecorator = (theme: EThemes) => (StoryComponent: Story) => (
    <div className={classNames('app', {}, [theme])}>
        <StoryComponent />
    </div>
);
