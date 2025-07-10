import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    aria: 'Primary active button',
    disabled: false,
    type: 'primary',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Ghost Button',
    aria: 'Ghost active button',
    disabled: false,
    type: 'ghost',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    text: 'Primary Disabled',
    aria: 'Primary button disabled',
    disabled: true,
    type: 'primary',
  },
};

export const GhostDisabled: Story = {
  args: {
    text: 'Ghost Disabled',
    aria: 'Ghost button disabled',
    disabled: true,
    type: 'ghost',
  },
};
