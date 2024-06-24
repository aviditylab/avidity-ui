import type { Meta, StoryObj } from "@storybook/react";
import { MenuGroup } from "./MenuGroup";

const meta = {
  title: "Demo/MenuGroup",
  component: MenuGroup,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof MenuGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: [
      {
        label: "About",
        color: "white",
        underline: true,
      },
      {
        label: "Portofolio",
        color: "white",
        underline: false,
      },
      {
        label: "Service",
        color: "white",
        underline: false,
      },
      {
        label: "Contact",
        color: "white",
        underline: false,
      },
    ],
  },
};
