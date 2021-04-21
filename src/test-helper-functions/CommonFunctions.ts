import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils'

export const CommonFunctions = {
    async waitForFunctionToPaint(wrapper: ReactWrapper) {
        await act(() => {
            new Promise<void>((resolve) => {
                setImmediate(() => {
                    wrapper.update();
                    resolve();
                })
            })
        })
    }
}
