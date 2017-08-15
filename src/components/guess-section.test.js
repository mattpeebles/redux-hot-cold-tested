import React from 'react'
import {shallow, mount} from 'enzyme'

import {GuessSection} from './guess-section'

describe('<GuessSection />', () => {
	it('should render without crashing', () => {
		shallow(<GuessSection />)
	})

	it('should render feedback', () => {
		const feedback = "You're ice cold..."
		const wrapper = shallow(<GuessSection feedback={feedback} />)

		expect(wrapper.find('#feedback').text()).toEqual(feedback)
	})
})