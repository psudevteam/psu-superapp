import type { Meta, StoryObj } from '@storybook/react';

import { FieldRadio } from './index';

const meta: Meta<typeof FieldRadio> = {
  component: FieldRadio,
  tags: ['autodocs'],
  title: 'Components/Molecules/Forms/Fields/Radio',
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },

    text: {
      control: { type: 'text' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    status: {
      options: ['none', 'success', 'warning', 'error'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    name: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FieldRadio>;

export const Primary: Story = {
  args: {
    size: 'sm',
    required: false,
    label: 'Waduh',
    text: 'Nama Lengkap',
    status: 'none',
    name: 'nama',
  },
};
