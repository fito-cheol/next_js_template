import type { Meta, StoryObj } from '@storybook/react';

import ButtonRound from './round';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonRound> = {
  title: 'Button/Round',
  component: ButtonRound,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonRound>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
  },
};
