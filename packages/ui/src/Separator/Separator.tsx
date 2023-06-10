import styles from "./Separator.module.css"

interface ISeparator {
    /**
     * Texte à afficher
     */
    label: string,
    /**
     * Orientation de la séparation
     */
    direction: "horizontal" | "vertical"
}

export const Separator = ({label = "ou", direction = "horizontal"}: ISeparator) => {
    return <div className={styles.separator}>
        <div className={`${styles[direction]}`}>{label}</div>
    </div>
}