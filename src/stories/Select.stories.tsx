import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Select from '../Select/Select';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    label: 'Select',
    options: [{key: 1, value: 'Test1'}, {key: 2, value: 'Test2'}, {key: 3, value: 'Test3'}]
  },
};