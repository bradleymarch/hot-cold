import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './InfoModal';



describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Should call onClose when clicked', () => {
    	const callback = jest.fn();
	    const wrapper = shallow(<InfoModal onClose={callback} />);
	    wrapper.find('.close').simulate('click', {preventDefault() {}
	});
	    expect(callback).toHaveBeenCalledWith();
    });
});