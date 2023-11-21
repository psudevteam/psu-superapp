import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Atoms/Forms/Button',
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'error',
        'cancel',
        'warning',
        'success',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Button',
    isLoading: false,
    onClick: action('button-clicked'),
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    size: 'sm',
    children: 'Button',
    onClick: action('button-clicked'),
  },
};

export const Cancel: Story = {
  args: {
    variant: 'cancel',
    size: 'sm',
    children: 'Button',
    onClick: action('button-clicked'),
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Button',
    onClick: action('button-clicked'),
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Disabled Button',
    disabled: false,
    isLoading: true,
    onClick: action('button-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Disabled Button',
    disabled: true,
    onClick: action('button-clicked'),
  },
};

export const WithLink: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Button with Link',
    href: 'https://example.com',
    onClick: linkTo('Components/Atoms/Forms/Button', 'Primary'),
  },
};
