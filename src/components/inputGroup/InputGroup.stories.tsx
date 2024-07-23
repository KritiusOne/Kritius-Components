import { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "MOLECULES/InputGroup",
  component: InputGroup, 
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof InputGroup>

export default meta;
type Story = StoryObj<typeof InputGroup>
export const Base: Story = {
  args: {
    stateData: "normal",
    textLabel: "Base",
    placeholder: "normal"
  }
}
export const Error: Story = {
  args: {
    stateData: "error",
    textLabel: "Error",
    placeholder: "error"
  }
}

export const Success: Story = {
  args: {
    stateData: "success",
    textLabel: "Success",
    placeholder: "Success"
  }
}