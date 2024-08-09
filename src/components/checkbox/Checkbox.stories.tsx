import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "ATOMS/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof Checkbox>
export const Base: Story = {

}
export const Blue: Story = {
  args: {
    colorCheckBox: "blue",
    size: "medium"
  }
}
export const Red: Story = {
  args: {
    colorCheckBox: "red",
    size: "small"
  }
}
export const Yellow: Story = {
  args: {
    colorCheckBox: "yellow",
    size: "medium"
  }
}
export const Light: Story = {
  args: {
    colorCheckBox: "Light",
    size: "large"
  }
}