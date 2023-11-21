import type { Meta, StoryObj } from '@storybook/react';

import { InputDatepicker } from './index';

const meta: Meta<typeof InputDatepicker> = {
  component: InputDatepicker,
  tags: ['autodocs'],
  title: 'Components/Atoms/Forms/Input/Date',
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
  },
};

export default meta;
type Story = StoryObj<typeof InputDatepicker>;

export const Primary: Story = {
  args: {
    size: 'sm',
    name: 'nama',
    disabled: false,
    placeholder: 'Masukkan Nama Anda',
  },
};
