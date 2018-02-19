import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[1]}/>);
    })

    it('Renders the list of guesses', () => {
        const guesses = [32, 20, 5];
        const wrapper = shallow(<GuessList guesses = {guesses}/>);
        const listItems = wrapper.find('li');
        listItems.forEach((item, index) => {
            expect(item.text()).toEqual(guesses[index].toString());
        })
    })
})