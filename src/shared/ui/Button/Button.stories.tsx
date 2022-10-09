import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, EButtonThemes } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export default {
    title: 'shared/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button'
};
PrimaryDark.decorators = [ThemeDecorator(EThemes.dark)];

export const Reset = Template.bind({});
Reset.args = {
    children: 'Button',
    theme: EButtonThemes.reset
};

export const ResetDark = Template.bind({});
ResetDark.args = {
    children: 'Button',
    theme: EButtonThemes.reset
};
ResetDark.decorators = [ThemeDecorator(EThemes.dark)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: EButtonThemes.outline
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: EButtonThemes.outline
};
OutlineDark.decorators = [ThemeDecorator(EThemes.dark)];
