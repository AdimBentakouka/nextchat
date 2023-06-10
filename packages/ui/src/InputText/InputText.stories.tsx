import type {Meta, StoryObj} from "@storybook/react";
import {InputText} from "./InputText.tsx";

const meta = {
    title: "Components/InputText",
    component: InputText,
    tags: ["autodocs"]
} satisfies Meta<typeof  InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Label",
        placeholder: "placeholder",
        error: "msgError",
        type: "password"
    }

}



