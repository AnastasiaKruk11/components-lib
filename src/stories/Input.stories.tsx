import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Input from '../Input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    error: false,
    placeholder: 'Text...',
    label: 'Label'
  },
};

export const ErrorInput: Story = {
  args: {
    error: true,
    placeholder: 'Text...',
    label: 'Error'
  },
};