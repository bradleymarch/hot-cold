import React from 'react';
import {shallow, mount} from 'enzyme';

import Guess from './Guess';



describe('<Guess />', () => {
    it('Renders without crashing', () => {
        shallow(<Guess />);
    });
    it('Should call onGuess on form submission', () => {
        const callback = jest.fn();
        const wrapper = mount(<Guess onGuess={callback} />);
        const value = 10;
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });

    it('Should reset input on submit', () => {
        const wrapper = mount(<Guess />);
        const input = wrapper.find('input[type="text"]');
        input.node.value = 10;
        wrapper.simulate('submit');
        expect(input.node.value).toEqual('');
    });

});