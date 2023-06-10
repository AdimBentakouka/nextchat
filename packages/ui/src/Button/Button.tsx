import type {ButtonHTMLAttributes, ReactNode} from "react";
import style from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Texte à afficher sur le button
     */
    label?: string,
    /**
     * url src de l'icône
     */
    icon?: ReactNode,

    /**
     * style du button
     */
    styleButton: "primary" | "secondary" | "outline",

    /**
     * une icÖne seulement
     */


}

export const Button = ({label = "Button", icon, styleButton = "primary", ...rest}: IButton) => {
    return (
        <button className={`${style.btn} ${style[styleButton]}`} {...rest}>
            {icon}
            {label}
        </button>
    )
}