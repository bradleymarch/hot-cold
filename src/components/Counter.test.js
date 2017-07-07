import React from 'react';
import {shallow} from 'enzyme';

import Counter from './Counter';


describe('<Counter />', () => {
    it('Renders without crashing', () => {
        shallow(<Counter />);
    });
    it('Renders what guess count you are on', () => {
        const value = 5;
        const wrapper = shallow(<Counter count={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    });
});