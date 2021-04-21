import { shallow } from 'enzyme';
import ToolTipComponent from '../../components/ToolTipComponent';

describe("ToolTipComponent Testing Suite: ", () => {
    it("Renders", () => {
        const wrapper = shallow(
            <ToolTipComponent
                toolTipText={"Some Helper Text"}
                renderChild={<div>Hello</div>}
            />
        );
        expect(wrapper).toBeTruthy();
    });
})