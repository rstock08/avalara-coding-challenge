import { FormValidation } from '../../services/FormValidation';

describe.skip("FormValidation Testing Suite: ", () => {
    it("isEmailEmailValid, with valid entry, returns true", () => {
        expect(FormValidation.isEmailEmailValid("someEmail@gmail.com")).toEqual(true);
    });
    it("isEmailEmailValid, with invalid entry, returns false", () => {
        expect(FormValidation.isEmailEmailValid("someEmailATnothing.com")).toEqual(true);
    });
    it("isNameValid, with valid entry, returns true", () => {
        expect(FormValidation.isNameValid("SomeFirstName")).toEqual(true);
    });
    it("isNameValid, with invalid entry, returns false", () => {
        expect(FormValidation.isNameValid("George Jr.")).toEqual(true);
    });
    it("isAddressValid, with valid entry, returns true", () => {
        expect(FormValidation.isAddressValid("1919 Second St. 92026 CA")).toEqual(true);
    });
    it("isAddressValid, with invalid entry, returns false", () => {
        expect(FormValidation.isAddressValid("%19923")).toEqual(true);
    });
});
