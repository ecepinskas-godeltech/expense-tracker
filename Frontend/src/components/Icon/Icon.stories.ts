import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '.';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Bell: Story = {
  args: {
    iconName: 'Bell',
    aria: 'Bell icon',
    size: 2,
  },
};

export const Building: Story = {
  args: {
    iconName: 'Building',
    aria: 'Building icon',
    size: 2,
  },
};

export const Camera: Story = {
  args: {
    iconName: 'Camera',
    aria: 'Camera icon',
    size: 2,
  },
};

export const Card: Story = {
  args: {
    iconName: 'Card',
    aria: 'Card icon',
    size: 2,
  },
};

export const Check: Story = {
  args: {
    iconName: 'Check',
    aria: 'Check icon',
    size: 2,
  },
};

export const Donation: Story = {
  args: {
    iconName: 'Donation',
    aria: 'Donation icon',
    size: 2,
  },
};

export const Droplet: Story = {
  args: {
    iconName: 'Droplet',
    aria: 'Droplet icon',
    size: 2,
  },
};

export const Message: Story = {
  args: {
    iconName: 'Message',
    aria: 'Message icon',
    size: 2,
  },
};

export const Paypal: Story = {
  args: {
    iconName: 'Paypal',
    aria: 'Paypal icon',
    size: 2,
  },
};

export const Printer: Story = {
  args: {
    iconName: 'Printer',
    aria: 'Printer icon',
    size: 2,
  },
};
