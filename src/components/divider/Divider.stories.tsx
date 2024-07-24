import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "ATOMS/Divider",
  component: Divider,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Divider>
export default meta;
type Story = StoryObj<typeof Divider>

export const Base: Story = {
  args: {
    marginSize: "lg",
    typeColor: "solid"
  }
}
export const GradientColor: Story = {
  args: {
    marginSize: "sm",
    typeColor: "gradient-color"
  }
}
export const GradientTransparent: Story = {
  args: {
    marginSize: "md",
    typeColor: "gradient-transparent"
  }
}