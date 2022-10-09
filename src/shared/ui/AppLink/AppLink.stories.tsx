import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, EAppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Link'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Link'
};
PrimaryDark.decorators = [ThemeDecorator(EThemes.dark)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Link',
    theme: EAppLinkTheme.secondary
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Link',
    theme: EAppLinkTheme.secondary
};
SecondaryDark.decorators = [ThemeDecorator(EThemes.dark)];
