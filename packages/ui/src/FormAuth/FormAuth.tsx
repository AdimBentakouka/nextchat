import type {PropsWithChildren, ReactNode} from "react";
import style from "./FormAuth.module.css";
interface IFormAuthContainer extends PropsWithChildren{
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
    /**
     * Nom du formulaire
     */
    nameForm: string,
    /**
     * Description du formulaire
     */
    descriptionForm?: string,

    /**
     * Contient le reste du formulaire, inputs, buttons ...
     */
    children: ReactNode

}

export const FormAuth = ({titleApp, logo, description, nameForm, descriptionForm, children}: IFormAuthContainer) => {

    return (
        <main className={style.formAuth}>
            <section>
                <div className={style.formHeaderContent}>
                    <img src={logo} alt={"logo auth"}/>
                    <h1>{titleApp}</h1>
                    <p>{description}</p>
                </div>
            </section>
            <section>
                <div className={style.formContent}>
                    <h1>{nameForm}</h1>
                    {descriptionForm && <p>{descriptionForm}</p>}
                    {children}
                </div>
            </section>
        </main>
    )
}