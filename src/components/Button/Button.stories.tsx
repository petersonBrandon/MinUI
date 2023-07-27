import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "../tailwind.css";

import Button from "./Button";

import { MdOutlineHome } from "react-icons/md";

const meta = {
  title: "MinUI Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_Dark: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    children: "Button",
  },
};

export const Primary_Light: Story = {
  args: {
    variant: "primary",
    theme: "light",
    children: "Button",
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

export const Secondary_Dark: Story = {
  args: {
    variant: "secondary",
    theme: "dark",
    children: "Button",
  },
};

export const Secondary_Light: Story = {
  args: {
    variant: "secondary",
    theme: "light",
    children: "Button",
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    theme: "dark",
    children: "Button",
  },
};

export const Outline_Dark: Story = {
  args: {
    variant: "outline",
    theme: "dark",
    children: "Button",
  },
};

export const Outline_Light: Story = {
  args: {
    variant: "outline",
    theme: "light",
    children: "Button",
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

export const Ghost_Dark: Story = {
  args: {
    variant: "ghost",
    theme: "dark",
    children: "Button",
  },
};

export const Ghost_Light: Story = {
  args: {
    variant: "ghost",
    theme: "light",
    children: "Button",
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

export const Small: Story = {
  args: {
    size: "small",
    theme: "dark",
    children: "Small Button",
  },
};

export const Normal: Story = {
  args: {
    size: "normal",
    theme: "dark",
    children: "Normal Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    theme: "dark",
    children: "Large Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    theme: "dark",
    children: <MdOutlineHome />,
  },
};

export const Icon_With_Text: Story = {
  args: {
    size: "icon",
    theme: "dark",
    children: [<MdOutlineHome className="mr-2" />, `Home`],
  },
};

export const Non_Rounded: Story = {
  args: {
    rounded: false,
    theme: "dark",
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    theme: "dark",
    children: "Button",
  },
};
