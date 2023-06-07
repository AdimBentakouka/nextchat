import type {Meta, StoryObj} from "@storybook/react";

import LogoEx from "assets/nextchat.png";

import {FormAuthContainer} from "./FormAuthContainer.tsx";

const meta = {
    title: "FormAuth/Container",
    component: FormAuthContainer,
    tags: ["autodocs"]
} satisfies Meta<typeof FormAuthContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        titleApp:  "titleApp",
        logo: LogoEx,
        description: "Application de messagerie instantanée développé en NextJS",
        nameForm: "Se connecter",
        descriptionForm: "Authentification gérée avec PassportJS",
        children: <p>...forms</p>
    }
}



