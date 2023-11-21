import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './index';

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Atoms/Forms/Select',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    name: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    options: {
      control: { type: 'array' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    name: 'nama',
    disabled: false,
    placeholder: 'Masukkan Nama Anda',
    options: [
      {
        value: 'First Value',
        label: 'First Label',
      },
      {
        value: 'Second Value',
        label: 'Second Label',
      },
    ],
  },
};
