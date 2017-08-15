import React from 'react'
import {shallow, mount} from 'enzyme'

import {GuessList} from './guess-list'

describe('<GuessList />', () => {
	it('should render without crashing', () => {
		shallow(<GuessList guesses={[]}/>)
	})

	it('renders a list of guesses', () => {
		const guesses = [3, 26, 93]
		const wrapper = shallow(<GuessList guesses={guesses} />)
		const bullets = wrapper.find('li')

		expect(bullets.length).toEqual(guesses.length)

		guesses.forEach((guess, index) => {
			expect(bullets.at(index).text()).toEqual(guess.toString())
		})
	})
})