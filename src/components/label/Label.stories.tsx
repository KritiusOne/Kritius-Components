import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";


const meta: Meta<typeof Label> = {
  title: "ATOMS/Label",
  component: Label,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Label>

export default meta;
type Story = StoryObj<typeof Label>

export const Base: Story = {
  args: {
    stateData: "normal",
    children: "Base",
    labelColor: "blue"
  }
}
export const Error: Story = {
  args: {
    stateData: "error",
    children: "Error",
    labelColor: "Dark"
  }
}
export const Success: Story = {
  args: {
    stateData: "success",
    children: "Success",
    labelColor: "yellow"
  }
}