import { shallow } from 'enzyme';
import SelectComponent from '../../components/SelectComponent';
import { dumbydata } from '../../services/dumbydata';

describe("SelectComponent Testing Suite: ", () => {
    it("Renders with no value", () => {
        const data = dumbydata.data.fields[4];
        const wrapper = shallow(
            <SelectComponent
                name={data.name}
                label={data.label}
                description={data.description}
                options={data.options!}
                uniqueKey={data.displayOrder}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();

    });
    it("Renders with valid value", () => {
        const data = dumbydata.data.fields[4];
        const wrapper = shallow(
            <SelectComponent
                value={data.options![0]}
                name={data.name}
                label={data.label}
                description={data.description}
                options={data.options!}
                uniqueKey={data.displayOrder}
                handleChange={jest.fn}
            />
        );
        expect(wrapper).toBeTruthy();
        // TODO: Update Enzyme Adapter when released - Currently using enzyme react adapter 16 which isn't quite compatible with React 17 yet
        //expect(wrapper.find(Select).props().value).toEqual(data.options![0]);
    });
})