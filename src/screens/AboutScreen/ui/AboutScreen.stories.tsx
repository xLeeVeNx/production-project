import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AboutScreen } from './AboutScreen';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export default {
    title: 'screens/AboutScreen',
    component: AboutScreen
} as ComponentMeta<typeof AboutScreen>;

const Template: ComponentStory<typeof AboutScreen> = (args) => <AboutScreen {...args as object} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(EThemes.dark)];
