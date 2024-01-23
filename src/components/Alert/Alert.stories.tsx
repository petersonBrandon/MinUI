import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../tailwind.css";

import Alert from "./Alert";

import { MdOutlineHome } from "react-icons/md";

const meta = {
  title: "MinUI Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_Dark: Story = {
  args: {
    variant: "default",
    theme: "dark",
    title: "Wait!",
    description: "Are your sure you want to continue?",
  },
};
