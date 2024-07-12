import type {Meta, StoryObj} from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
  title: "MOLECULES/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof Card>

export const Base: Story = {
  args: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF-cQG9pdy1yU-EQiuTidoTfk0kFPX7Q9YQ&s",
    title: "Card",
    subtitle: "Subtitle card",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, excepturi voluptas? Quos, provident deserunt maiores cum explicabo in eum, fugit fuga inventore, esse cumque corrupti. Exercitationem aspernatur error ad nostrum?"
  }
}