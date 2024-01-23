import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../tailwind.css";

import Avatar from "./Avatar";

import { MdOutlineHome } from "react-icons/md";

const meta = {
  title: "MinUI Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_Dark: Story = {
  args: {
    src: "https://www.brandonpeterson.dev/Logo%20Solid.png",
    alt: "image",
  },
};
