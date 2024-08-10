import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "MOLECULES/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SearchBar>
export default meta
type Story = StoryObj<typeof SearchBar>

export const Base: Story = {

}