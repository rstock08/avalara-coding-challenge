import { shallow } from 'enzyme';
import FormComponent from '../../components/FormComponent';
import TextFieldComponent from '../../components/TextFieldComponent';
import SelectComponent from '../../components/SelectComponent';
import RadioComponent from '../../components/RadioComponent';
import { IFormFieldsData } from '../../containers/FormContainer';
import { dumbydata } from '../../services/dumbydata';

describe.only("FormComponent Testing Suite: ", () => {
    it("Renders with no data", () => {
        const wrapper = shallow(
            <FormComponent
                formData={[] as IFormFieldsData[]}
                formType={"Some Value"}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();

    });
    it("Renders with valid data", () => {
        const wrapper = shallow(
            <FormComponent
                formData={dumbydata.data.fields}
                formType={"Some Value"}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();
    });
    it("mapFormInputFields, with text type, renders TextFieldComponent", () => {
        const subSetData = [] as IFormFieldsData[];
        subSetData.push(dumbydata.data.fields[0])
        const wrapper = shallow(
            <FormComponent
                formData={dumbydata.data.fields}
                formType={"Some Value"}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();
        expect(wrapper.find(TextFieldComponent)).toBeTruthy();
    });
    it("mapFormInputFields, with select type, renders SelectComponent", () => {
        const subSetData = [] as IFormFieldsData[];
        subSetData.push(dumbydata.data.fields[4])
        const wrapper = shallow(
            <FormComponent
                formData={dumbydata.data.fields}
                formType={"Some Value"}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();
        expect(wrapper.find(SelectComponent)).toBeTruthy();
    });
    it("mapFormInputFields, with radio type, renders RadioComponent", () => {
        const subSetData = [] as IFormFieldsData[];
        subSetData.push(dumbydata.data.fields[4])
        const wrapper = shallow(
            <FormComponent
                formData={dumbydata.data.fields}
                formType={"Some Value"}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();
        expect(wrapper.find(RadioComponent)).toBeTruthy();
    });
})
