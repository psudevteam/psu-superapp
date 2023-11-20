import type { Meta, StoryObj } from '@storybook/react';

import { FieldDatepicker } from './index';

const meta: Meta<typeof FieldDatepicker> = {
  component: FieldDatepicker,
  tags: ['autodocs'],
  title: 'Components/Molecules/Forms/Fields/Datepicker',
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
type Story = StoryObj<typeof FieldDatepicker>;

export const Primary: Story = {
  args: {
    size: 'sm',
    required: false,
    label: 'Tanggal Lahir',
    status: 'none',
    name: 'nama',
    placeholder: 'Tanggal lahir',
  },
};
