import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "ATOMS/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extremadamente largo',
    size: "extraLarge"
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: "Grande"
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: "medium"
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: "Small"
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    children: 'Delete now',
    className: "bg-red-500 border-red-500",
    size: "extraLarge"
  }
};