import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai'

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('renders the correct count', () => {
    	let count = 14
    	const wrapper = shallow(<GuessCount count={count} />)

    	expect(wrapper.text()).to.be.equal(`Guess #${count}!`)
    })
})