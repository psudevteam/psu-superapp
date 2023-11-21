import type { Meta, StoryObj } from '@storybook/react';

import { FieldSelect } from './index';

const meta: Meta<typeof FieldSelect> = {
  component: FieldSelect,
  tags: ['autodocs'],
  title: 'Components/Molecules/Forms/Fields/Select',
  argTypes: {
    required: {
      control: { type: 'boolean' },
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
    message: {
      control: { type: 'text' },
    },
    hint: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FieldSelect>;

export const Primary: Story = {
  args: {
    size: 'sm',
    required: false,
    label: 'Arah',
    status: 'none',
    name: 'nama',
    options: [
      {
        label: 'Lurus',
        value: 'lurus',
      },
      {
        label: 'Lurus aja',
        value: 'lurus',
      },
    ],
    placeholder: 'Nama Lengkap',
  },
};
