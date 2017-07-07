import React from 'react';
import {shallow, mount} from 'enzyme';

import Title from './Title';



describe('<Title />', () => {
    it('Renders without crashing', () => {
        shallow(<Title />);
    });
    it('Hides the info modal on first load', () => {
        const wrapper = shallow(<Title />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Should render InfoModal if toggled', () => {
        const wrapper = shallow(<Title />);
        wrapper.instance().toggleInfoModal(true);
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
});