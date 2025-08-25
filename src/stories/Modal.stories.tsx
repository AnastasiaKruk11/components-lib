import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Modal from '../Modal/Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  args: {
    content: 'Test',
    isOpen: true,
    onClose: () => {console.log('closed')}
  },
};