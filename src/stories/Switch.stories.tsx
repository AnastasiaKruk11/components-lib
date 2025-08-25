import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Switch from '../Switch/Switch';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSwitch: Story = {
  args: {
    label: "switch",
    disabled: false,
    checked: false,
    onChange: () => {}
  },
};