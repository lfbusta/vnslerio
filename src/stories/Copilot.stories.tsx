import Copilot from "../components/Copilot";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import "../index.css";

const meta = {
  title: "Autarc/Copilot",
  component: Copilot,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    viewport: {
      defaultViewport: "fullscreen",
    },
  },
} satisfies Meta<typeof Copilot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
