import validator from "validator";

export const FormValidation = {
    isEmailEmailValid(val: string) {
        return validator.isEmail(val);
    },
    isNameValid(val: string) {
        return validator.isAlpha(val.replaceAll(" ", ""));
    },
    isAddressValid(val: string) {
        const regex = /.-\s/g
        return (validator.isAlphanumeric(val.replaceAll(regex, "")))
    }
}