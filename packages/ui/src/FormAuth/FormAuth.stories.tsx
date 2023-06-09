import type {Meta, StoryObj} from "@storybook/react";

import LogoEx from "assets/nextchat.png";

import {FormAuth} from "./FormAuth.tsx";

const meta = {
    title: "Components/FormAuth",
    component: FormAuth,
    tags: ["autodocs"]
} satisfies Meta<typeof FormAuth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        titleApp:  "titleApp",
        logo: LogoEx,
        description: "lorem ipsum description",
        nameForm: "nameForm",
        descriptionForm: "description form",
        children: <p>...forms</p>
    }
}



