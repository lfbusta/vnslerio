import Modal from "../components/Modal";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import "../index.css";

const meta = {
  title: "Autarc/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Modal",
  },
};
