import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '.';

const onInputChange = (value: string) => {
  console.log('Storybook input:', value);
};
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Label: Story = {
  args: {
    type: 'text',
    name: 'test',
    placeholder: 'Text input',
    aria: 'Input field for title',
    defaultValue: '',
    onChange: onInputChange,
    helperText: 'Enter your name',
    helperTextType: 'label',
    errorMessage: 'Field can not be empty',
  },
};

export const Caption: Story = {
  args: {
    type: 'text',
    name: 'test',
    placeholder: 'Text input',
    aria: 'Input field for title',
    defaultValue: '',
    onChange: onInputChange,
    helperText: 'Enter your name',
    helperTextType: 'caption',
    errorMessage: 'Field can not be empty',
  },
};
