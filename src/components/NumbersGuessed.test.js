import React from 'react';
import {shallow} from 'enzyme';

import NumbersGuessed from './NumbersGuessed';



describe('<NumbersGuessed />', () => {
    it('Renders without crashing', () => {
        shallow(<NumbersGuessed guesses={[]} />);
    });

    it('Renders what you have guessed', () => {
        const values = [10, 24, 52];
        const wrapper = shallow(<NumbersGuessed guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });
});