import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can make guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 20
        })
    
        wrapper.instance().makeGuess(70);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
        expect(wrapper.state('guesses')).toEqual([70]);

        wrapper.instance().makeGuess(50);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
        expect(wrapper.state('guesses')).toEqual([70, 50]);

        wrapper.instance().makeGuess(15);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
        expect(wrapper.state('guesses')).toEqual([70, 50, 15]);

        wrapper.instance().makeGuess(10);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
        expect(wrapper.state('guesses')).toEqual([70, 50, 15, 10]);

        wrapper.instance().makeGuess(20);
        expect(wrapper.state('feedback')).toEqual('You got it!');
        expect(wrapper.state('guesses')).toEqual([70, 50, 15, 10, 20]);
    });

    it('Can restart the game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [10, 3, 15],
            feedback: 'Good job',
            correctAnswer: -1
        });
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    })

    it('Can generate aural update', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [10, 3, 15],
            feedback: 'Good job',
            correctAnswer: 20
        });
        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: Good job You\'ve made 3 guesses. In order of most- to least-recent, they are: 15, 3, 10');

    })
})