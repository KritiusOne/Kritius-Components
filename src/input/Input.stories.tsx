import { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input";


const meta: Meta<typeof Input> = {
  title: "ATOMS/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    stateData: "normal",
    placeholder: "Base"
  }
}
export const Error: Story = {
  args: {
    stateData: "error",
    placeholder: "error"
  }
}
export const Success: Story = {
  args: {
    stateData: "success",
    placeholder: "Success"
  }
}