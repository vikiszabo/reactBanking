import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import AmountInput from "./AmountInput";
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";

configure({ adapter: new Adapter() });

describe('Testing component: <AmountInput />', () => {
    const props = {
        name: 'Test Name',
        label: "Test Label",
        onChange: ()=>{},
    };
    const wrapper = shallow(<AmountInput {...props} />);

    it('has props for name and label ', () => {
        console.log(wrapper.find(FormControl));
        expect(wrapper.props().name).to.equal('Test Name');
        expect(wrapper.props().label).to.equal('Test Label');
    });

    it('renders FormControl element', () => {
        expect(wrapper.find(FormControl)).to.have.length(1)
    })
});
