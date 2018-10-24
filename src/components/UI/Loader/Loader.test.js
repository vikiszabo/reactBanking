import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import Typography from "@material-ui/core/Typography/Typography";
import Loader from "./Loader";
import {LinearProgress} from "@material-ui/core";

configure({ adapter: new Adapter() });


describe('Testing component: <Loader />', () => {
    const wrapper = shallow(<Loader message='Message' />);
    it('renders Loader message Typography component', () => {
        expect(wrapper.find(Typography)).to.have.lengthOf(1);
    });
    it('renders Progressbar', () => {
        expect(wrapper.find(LinearProgress)).to.have.lengthOf(1);
    });
    const wrapper2 = shallow(<Loader />);
    it('renders without message property', () => {
        expect(wrapper2.find(Typography)).to.have.lengthOf(1);
    });
});