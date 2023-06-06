/**
 * Mot de passe valide ?
 * @param password - vérifier la force d'un mot de passe
 */
export const isValidPassword = (password : string) => {
    return password.length > 1;
}
/**
 * Emailvalide ?
 * @param email - vérifier la force d'un mot de passe
 */
export const isValidEmail = (email : string) => {
    return email.length > 1;
}

export const test = () => {
    return true;
}