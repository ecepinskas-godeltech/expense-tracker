import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputLabel } from '.';

const meta: Meta<typeof InputLabel> = {
  title: 'Components/InputLabel',
  component: InputLabel,
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Label: Story = {
  args: {
    text: 'Label',
    htmlFor: 'input',
    type: 'label',
  },
};

export const Caption: Story = {
  args: {
    text: 'Caption',
    htmlFor: 'input',
    type: 'caption',
  },
};
