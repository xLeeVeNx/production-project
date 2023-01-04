import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EThemes } from 'shared/contexts/ThemeContext/ThemeContext';

export default {
    title: 'shared/Modal',
    component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args} />
);

export const Light = Template.bind({});
Light.args = {
    isOpened: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur deserunt dolore earum esse fugiat maxime natus nemo quaerat vero!'
};

export const Dark = Template.bind({});
Dark.args = {
    isOpened: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur deserunt dolore earum esse fugiat maxime natus nemo quaerat vero!'
};
Dark.decorators = [ThemeDecorator(EThemes.dark)];
