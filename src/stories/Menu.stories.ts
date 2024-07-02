import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Menu } from "./Menu";

const meta = {
  title: "Component/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    color: { control: "color" },
  },
  args: { onClick: () => fn() },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About: Story = {
  args: {
    label: "About",
    color: "white",
    underline: true,
  },
};
export const Portofolio: Story = {
  args: {
    label: "Portofolio",
    color: "white",
    underline: false,
  },
};
export const Service: Story = {
  args: {
    label: "Service",
    color: "white",
    underline: false,
  },
};
export const Contact: Story = {
  args: {
    label: "Contact",
    color: "white",
    underline: false,
  },
};
