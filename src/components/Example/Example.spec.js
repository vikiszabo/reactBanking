import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Example from "./Example";

configure({ adapter: new Adapter() });

describe('<Example />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Example text="Hello World!" />);
    });

    it('should render the component', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should render an h1 with the text prop', () => {
        expect(wrapper.find('h1').text()).toBe('Hello World!');
    });
});