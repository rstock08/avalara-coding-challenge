import validator from "validator";

export const FormValidation = {
    isEmailEmailValid(val: string) {
        return validator.isEmail(val);
    },
    isNameValid(val: string) {
        const regex = /.\s/g
        return validator.isAlpha(val.replaceAll(regex, ""));
    },
    isAddressValid(val: string) {
        const regex = /.-\s/g
        return (validator.isAlphanumeric(val.replaceAll(regex, "")))
    }
}