import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, EButtonSizes, EButtonThemes } from './Button';
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

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '',
    theme: EButtonThemes.backgroundInverted,
    square: true,
    size: EButtonSizes.M
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '',
    theme: EButtonThemes.backgroundInverted,
    square: true,
    size: EButtonSizes.L
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '',
    theme: EButtonThemes.backgroundInverted,
    square: true,
    size: EButtonSizes.XL
};

export const SquareSizeMDark = Template.bind({});
SquareSizeMDark.args = {
    children: '',
    theme: EButtonThemes.backgroundInverted,
    square: true,
    size: EButtonSizes.M
};
SquareSizeMDark.decorators = [ThemeDecorator(EThemes.dark)];

export const SquareSizeLDark = Template.bind({});
SquareSizeLDark.args = {
    children: '',
    theme: EButtonThemes.backgroundInverted,
    square: true,
    size: EButtonSizes.L
};
SquareSizeLDark.decorators = [ThemeDecorator(EThemes.dark)];

export const SquareSizeXLDark = Template.bind({});
SquareSizeXLDark.args = {
    children: '',
    theme: EButtonThemes.backgroundInverted,
    square: true,
    size: EButtonSizes.XL
};
SquareSizeXLDark.decorators = [ThemeDecorator(EThemes.dark)];

export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Text',
    theme: EButtonThemes.backgroundInverted,
    size: EButtonSizes.M
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Text',
    theme: EButtonThemes.backgroundInverted,
    size: EButtonSizes.L
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Text',
    theme: EButtonThemes.backgroundInverted,
    size: EButtonSizes.XL
};

export const SizeMDark = Template.bind({});
SizeMDark.args = {
    children: 'Text',
    theme: EButtonThemes.backgroundInverted,
    size: EButtonSizes.M
};
SizeMDark.decorators = [ThemeDecorator(EThemes.dark)];

export const SizeLDark = Template.bind({});
SizeLDark.args = {
    children: 'Text',
    theme: EButtonThemes.backgroundInverted,
    size: EButtonSizes.L
};
SizeLDark.decorators = [ThemeDecorator(EThemes.dark)];

export const SizeXLDark = Template.bind({});
SizeXLDark.args = {
    children: 'Text',
    theme: EButtonThemes.backgroundInverted,
    size: EButtonSizes.XL
};
SizeXLDark.decorators = [ThemeDecorator(EThemes.dark)];
