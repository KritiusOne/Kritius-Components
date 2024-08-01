import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "ATOMS/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Spinner>
export default meta;
type Story = StoryObj<typeof Spinner>

export const Base: Story = {
}
export const Dark: Story = {
  args: {
    colorSpinner: "Dark",
    size: "large"
  }
}
export const Light: Story = {
  args: {
    colorSpinner: "Light",
    size: "small"
  }
}
export const Yellow: Story = {
  args: {
    colorSpinner: "yellow",
    size: "medium"
  }
}
export const Red: Story = {
  args: {
    colorSpinner: "red",
    size: "large"
  }
}