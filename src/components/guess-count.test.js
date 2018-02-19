import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    })

    it('Renders the guess count', () => {
        const guessCount = 2;
        const text = 'You\'ve made 2 guesses!';
        const wrapper = shallow(<GuessCount guessCount = {guessCount}/>);
        expect(wrapper.text()).toEqual(text);
    })
})