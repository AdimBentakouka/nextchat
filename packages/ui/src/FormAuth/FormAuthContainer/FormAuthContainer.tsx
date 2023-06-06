import {PropsWithChildren} from "react";
import style from "./FormAuthContainer.module.css";
interface IFormAuthContainer {
    /**
     * Nom de l'application
     */
    titleApp: string,
    /**
     * URL de l'icône de l'application
     */
    logo: string,
    /**
     * Bref description de l'application
     */
    description: string,
}

export const FormAuthContainer = ({titleApp, logo, description, children}: PropsWithChildren<IFormAuthContainer>) => {

    return (
        <main className={style.formAuth}>
            <section>
                <div className={style.formContent}>
                    <img src={logo} alt={"logo auth"}/>
                    <h1>{titleApp}</h1>
                    <p>{description}</p>
                </div>
            </section>
            <section>
                <div className={style.formContent}>
                    {children}
                </div>
            </section>
        </main>
    )
}