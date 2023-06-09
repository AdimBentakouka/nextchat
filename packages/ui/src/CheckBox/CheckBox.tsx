import {InputHTMLAttributes} from "react";

import style from "./CheckBox.module.css";

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement>{
    label: string
}
export const CheckBox = ({label, ...rest} : ICheckBox) => {
    return (
        <div className={style.CheckBox}>
            <input {...rest} type={"checkbox"} />
            <label>{label}</label>
        </div>
    )
}