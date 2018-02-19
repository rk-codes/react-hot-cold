import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    })

    it('Renders the guess count', () =>{
        const feedback = 'Starting game';
        let guessCount = 0;
        const wrapper = shallow(<Feedback feedback={feedback} guessCount={guessCount} />);
        expect(wrapper.text().trim()).toEqual(feedback.trim());
    })
})