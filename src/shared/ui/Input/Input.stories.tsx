import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';
import { Input } from 'shared/ui/Input/Input';

export default {
    title: 'shared/Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'Input',
    placeholder: 'Enter text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    value: 'Input',
    placeholder: 'Enter text'
};
PrimaryDark.decorators = [ThemeDecorator(EThemes.dark)];
