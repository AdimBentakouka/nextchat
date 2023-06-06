import type {Meta, StoryObj} from "@storybook/react";
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
        titleApp:  "App",
        logo: "cc",
        description: "lorem ipsum ...",
        children: <p>Form</p>
    }
}



