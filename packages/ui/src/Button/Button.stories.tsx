import type {Meta, StoryObj} from "@storybook/react";
import LogoGoogle from "assets/icon-google.png";
import {Button} from "./Button.tsx";

const meta = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"]
} satisfies Meta<typeof  Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Button",
        icon: <img src={LogoGoogle} alt="test" width={21} />,
        styleButton: "primary",
        disabled: false
    }

}

