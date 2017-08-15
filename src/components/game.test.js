import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai'

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});