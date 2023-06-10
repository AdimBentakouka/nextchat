import type {InputHTMLAttributes, ReactNode} from "react";

import style from "./CheckBox.module.css";

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement>{
    /**
     * Label à afficher à droite de la checkbox
     */
    label: ReactNode
}
export const CheckBox = ({label, ...rest} : ICheckBox) => {
    return (
        <div className={style.CheckBox}>
            <input {...rest} type={"checkbox"} />
            <label>{label}</label>
        </div>
    )
}