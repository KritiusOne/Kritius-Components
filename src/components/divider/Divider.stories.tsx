import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "ATOMS/Divider",
  component: Divider,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Divider>
export default meta;
type Story = StoryObj<typeof Divider>

export const Base: Story = {
  args: {
    
  }
}