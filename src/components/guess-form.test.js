import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess = {callback} />);
        const guess = 20;
        wrapper.find('input[type="number"]').instance().value = guess;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(guess.toString());
    });

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm  />);
        const guess = 20;
        const inputElement =  wrapper.find('input[type="number"]').instance();
        inputElement.value = guess;
        wrapper.simulate('submit');
        expect( inputElement.value).toEqual('');     
    });

})