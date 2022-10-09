import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainScreen } from './MainScreen';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export default {
    title: 'screens/MainScreen',
    component: MainScreen
} as ComponentMeta<typeof MainScreen>;

const Template: ComponentStory<typeof MainScreen> = (args) => <MainScreen {...args as object} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(EThemes.dark)];
