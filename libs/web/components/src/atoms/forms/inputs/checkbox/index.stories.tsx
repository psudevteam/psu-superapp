import type { Meta, StoryObj } from '@storybook/react';

import { InputCheckbox } from './index';

const meta: Meta<typeof InputCheckbox> = {
  component: InputCheckbox,
  tags: ['autodocs'],
  title: 'Components/Atoms/Forms/Input/Checkbox',
  argTypes: {
    required: {
      control: { type: 'boolean' },
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
type Story = StoryObj<typeof InputCheckbox>;

export const Primary: Story = {
  args: {
    required: false,
    name: 'nama',
    disabled: false,
  },
};
