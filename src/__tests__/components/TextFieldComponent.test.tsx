import { shallow } from 'enzyme';
import TextFieldComponent from '../../components/TextFieldComponent';
import { dumbydata } from '../../services/dumbydata';

describe("TextFieldComponent Testing Suite: ", () => {
    it("Renders with no value", () => {
        const data = dumbydata.data.fields[0];
        const wrapper = shallow(
            <TextFieldComponent
                name={data.name}
                label={data.label}
                description={data.description}
                uniqueKey={data.displayOrder}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();

    });
    it("Renders with valid value", () => {
        const data = dumbydata.data.fields[0];
        const wrapper = shallow(
            <TextFieldComponent
                value={"someval"}
                name={data.name}
                label={data.label}
                description={data.description}
                uniqueKey={data.displayOrder}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();
        // TODO: Update Enzyme Adapter when released - Currently using enzyme react adapter 16 which isn't quite compatible with React 17 yet
        //expect(wrapper.find(TextField).props().value).toEqual(data.options![0]);
    });
})