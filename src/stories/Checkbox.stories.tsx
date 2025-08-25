import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Checkbox from '../Checkbox/Checkbox';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
  args: {
    label: "checkbox",
    disabled: false,
    checked: false
  },
};