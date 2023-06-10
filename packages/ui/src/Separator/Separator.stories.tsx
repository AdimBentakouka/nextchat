import type {Meta, StoryObj} from "@storybook/react";
import {Separator} from "./Separator.tsx";

const meta = {
    title: "Components/Separator",
    component: Separator,
    tags: ["autodocs"]
} satisfies Meta<typeof  Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "ou",
        direction: "horizontal"
    }

}



