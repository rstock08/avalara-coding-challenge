import { mount } from 'enzyme';
import FormContainer from '../../containers/FormContainer';
import { CommonFunctions } from '../../test-helper-functions/CommonFunctions';

describe.skip("FormContainer Testing Suite: ", () => {
    // TODO: Update Enzyme Adapter when released - Currently using enzyme react adapter 16 which isn't quite compatible with React 17 yet
    it("Renders with no data", async () => {
        const wrapper = mount(<FormContainer />);
        await CommonFunctions.waitForFunctionToPaint(wrapper);
        expect(wrapper).toBeTruthy();

    });
    it("Renders with valid data", async () => {
        const wrapper = mount(<FormContainer />);
        await CommonFunctions.waitForFunctionToPaint(wrapper);
        expect(wrapper).toBeTruthy();
    });
})