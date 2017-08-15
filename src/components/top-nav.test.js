import React from 'react'
import {shallow} from 'enzyme'

import {TopNav} from './top-nav'

describe('<TopNav />', () => {
	it('should render without crashing', () => {
		shallow(<TopNav />)
	})

	it('should call dispatch on click on What?', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<TopNav dispatch={dispatch}/>)

		wrapper.find('.what').simulate('click', {preventDefault() {}})
		expect(dispatch).toHaveBeenCalled()
	})

	it('should call dispatch on click on New Game', () => {
		const dispatch = jest.fn()
		const wrapper = shallow(<TopNav dispatch={dispatch} />)

		wrapper.find('.new').simulate('click', {preventDefault() {}})

		expect(dispatch).toHaveBeenCalled()
	})
})