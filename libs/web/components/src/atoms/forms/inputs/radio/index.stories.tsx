import type { Meta, StoryObj } from '@storybook/react';

import { InputRadio } from './index';

const meta: Meta<typeof InputRadio> = {
  component: InputRadio,
  tags: ['autodocs'],
  title: 'Components/Atoms/Forms/Input/Radio',
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
type Story = StoryObj<typeof InputRadio>;

export const Primary: Story = {
  args: {
    required: false,
    name: 'nama',
    disabled: false,
  },
};
