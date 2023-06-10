import {InputHTMLAttributes, useState} from "react";
import style from "./InputText.module.css";

interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
    /**
     *   Texte à afficher au dessus de l'input
     */
    label: string,
    /**
     * Message d'erreur
     */
    error?: string,
    /**
     * Affiche un texte par défaut
     */
    placeholder: string,
    /**
     * Les types pris en charges par se composant
     */
    type: "text" | "email" | "password"
}

export const InputText = ({label, error, type, ...rest}: IInputText) => {

    const [visibility, setVisibility] = useState<boolean>(false);

    const ShowPassword = () : string => {
        if(type === "password" && visibility)
        {
            return "texte"
        }

        return type;
    }

    return (
        <div className={`${style.InputTextContainer} ${error ? style.InputTextError : ""}`}>
            <label>{label}</label>
            <div className={style.InputText}>
                <input type={ShowPassword()} {...rest} />
                {type === "password" && <span className={"material-symbols-rounded"} onMouseDown={() => setVisibility(true)} onMouseUp={() => setVisibility(false)} onMouseLeave={() => setVisibility(false)} >{visibility ? "visibility_off" : "visibility"}</span>}
            </div>
            {error !== undefined && error.length > 0 && <p>{error}</p>}
        </div>
    )
}
