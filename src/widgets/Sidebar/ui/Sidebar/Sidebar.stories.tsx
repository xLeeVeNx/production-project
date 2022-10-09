import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(EThemes.dark)];
