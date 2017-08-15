import React from 'react'
import {shallow, mount} from 'enzyme'
//import {expect} from 'chai'

import {GuessForm} from './guess-form'
import {makeGuess} from '../actions'

describe('<GuessForm />', () => {
	it('should render without crashing', () => {
		shallow(<GuessForm />)
	})

	it('dispatches makeGuess on submit', () => {
		const callback = jest.fn()
		const wrapper = mount(<GuessForm onGuess={callback} />)
		const guess = 20

		wrapper.find('input[type="text"]').node.value = guess
		wrapper.simulate('submit')
		expect(callback).toHaveBeenCalledWith(guess.toString())
	})

	it('should reset the input form on submittal', () => {
		const wrapper = mount(<GuessForm />)

		let input = wrapper.find('input[type="text"]')
		input.node.value = 20
		wrapper.simulate('submit')
		expect(input.node.value).toEqual('')
	})
})