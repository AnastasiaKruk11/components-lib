import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Button from '../Button/Button';
import '../Button/Button.module.css';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallTextBtn: Story = {
  args: {
    size: 'small',
    variant: 'text',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const MediumTextBtn: Story = {
  args: {
    size: 'medium',
    variant: 'text',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const LargeTextBtn: Story = {
  args: {
    size: 'large',
    variant: 'text',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const SmallOutlinedBtn: Story = {
  args: {
    size: 'small',
    variant: 'outlined',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const MediumOutlinedBtn: Story = {
  args: {
    size: 'medium',
    variant: 'outlined',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const LargeOutlinedBtn: Story = {
  args: {
    size: 'large',
    variant: 'outlined',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const SmallContainedBtn: Story = {
  args: {
    size: 'small',
    variant: 'contained',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const MediumContainedBtn: Story = {
  args: {
    size: 'medium',
    variant: 'contained',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};

export const LargeContainedBtn: Story = {
  args: {
    size: 'large',
    variant: 'contained',
    children: 'Button',
    onClick: () => {console.log('click')}
  },
};