import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    })

    it('Renders the aural status', () => {
        const auralStatus = "Status of the game";
        const wrapper = shallow(<AuralStatus auralStatus = {auralStatus} />);
        expect(wrapper.text()).toEqual(auralStatus);
    })
})