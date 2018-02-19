import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    })

    it('Should call onRestartGame on clicking new game', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame = {callback}/>);
        const newLink = wrapper.find('.new');
        newLink.simulate('click');
        expect(callback).toHaveBeenCalled();
    })

    it('Should call onGenerateAuralUpdate on clicking status link', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate = {callback}/>);
        const statusLink = wrapper.find('.status-link');
        statusLink.simulate('click');
        expect(callback).toHaveBeenCalled();
    })
})