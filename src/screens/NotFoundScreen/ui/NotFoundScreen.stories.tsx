import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotFoundScreen } from './NotFoundScreen';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export default {
    title: 'screens/NotFoundScreen',
    component: NotFoundScreen
} as ComponentMeta<typeof NotFoundScreen>;

const Template: ComponentStory<typeof NotFoundScreen> = (args) => <NotFoundScreen {...args as object} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(EThemes.dark)];
