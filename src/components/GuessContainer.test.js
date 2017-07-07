import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessContainer from './GuessContainer';



describe('<GuessContainer />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessContainer />);
    });
     it('Displays feedback', () => {
        const feedback = "Example feedback";
        const wrapper = shallow(<GuessContainer feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});